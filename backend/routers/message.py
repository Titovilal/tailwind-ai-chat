from datetime import datetime
import json
from fastapi import APIRouter, HTTPException

from utils.models import AIMessageResponse, UserMessage, AIMessage
from .chat import Chat, create_chat
from .qa import QA, create_qa
from utils.config import chat_gpt, database
from pydantic import BaseModel, EmailStr
from fastapi import Body

router_message = APIRouter(
    prefix="/message",
    tags=["Message"],
    responses={404: {"description": "Not found"}},
)


@router_message.get("/questions")
async def get_user_message():
    return database.table("usermessage").select("*").execute()


@router_message.get("/responses")
async def get_ai_message():
    return database.table("aimessage").select("*").execute()


@router_message.post("/questions")
async def create_user_message(message: UserMessage) -> int:
    message_data = message.model_dump()
    response = database.table("usermessage").insert(message_data).execute()
    aimessage_id = response.data[0]["id"] 
    return aimessage_id

@router_message.post("/responses")
async def create_ai_message(message: AIMessage) -> int:
    message_data = message.model_dump()
    response = database.table("aimessage").insert(message_data).execute()
    aimessage_id = response.data[0]["id"] 
    return aimessage_id

@router_message.post("/submit")
async def get_response(
    chatId: str = Body(...), question: str = Body(...), code: str = Body(...)
) -> AIMessageResponse:
    usermessage = UserMessage(question=question)
    account_id = await create_user_message(usermessage)

    if code == "":
        role = "You are an assistant that writes Tailwind code. Your response should be in JSON format, with the following keys: explanation, code. In the explanation i want only text that explains the code, and in code i want only the tailwind code."
        prompt = question
    else:
        role = "You are an assistant that reviews and modifies HTML code using Tailwind CSS. Your response should be in JSON format, with the following keys: explanation, code. In the explanation i want only text that explains the modifications, and in code i want the modified Tailwind code."
        prompt = (
            f"Here is some HTML code:\n```html\n{code}\n```\n"
            f"Please modify this code according to the following instruction: {question}"
        )
    
    response = chat_gpt(prompt, role=role)
        
    response_json = json.loads(response)
    response_explanation = response_json['explanation']
    response_code = response_json['code']

    aimessage = AIMessage(
        explanation=response_explanation,
        code=response_code,
    )
    # aimessage = AIMessage(
    #     explanation='Explicado',
    #     code='<div className="bg-red-500 p-4 rounded"></div>',
    # )

    ai_id = await create_ai_message(aimessage)


    aimessageresponse = AIMessageResponse(
        id = ai_id,
        explanation=aimessage.explanation,
        code=aimessage.code
    )


    if not chatId:
         chatId = create_chat(account_id=account_id, created_at=datetime.now())
 
    qa = QA(
        chat_id=chatId,
        question_id=account_id,
        answer_id=ai_id,
        created_at=datetime.now(),
        status="like",
        groundtruth="paco",
    )

    await create_qa(qa)

    return aimessageresponse
