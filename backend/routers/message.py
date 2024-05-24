from datetime import datetime
from fastapi import APIRouter, HTTPException

from utils.models import AIMessageResponse, UserMessage, AIMessage
from .chat import Chat, create_chat
from .qa import QA, create_qa
from utils.config import database
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
    aimessageId: str = Body(...), question: str = Body(...), code: str = Body(...)
) -> AIMessage:
    
    usermessage = UserMessage(question=question)
    account_id = await create_user_message(usermessage)
    # aimessage = aimessage_gpt(question)
    aimessage = AIMessageResponse(
        explanation="Esto es un div",
        code='<div className="bg-red-500 p-4 rounded"></div>',
    )
    ai_id = await create_ai_message(aimessage)
    aimessage.id = ai_id

    if not chatId:
         chatId = create_chat(account_id=account_id, created_at=datetime.now())
 
    qa = QA(
        aimessage_id=chatId,
        question_id=account_id,
        answer_id=ai_id,
        created_at=datetime.now(),
        status="reviewed",
        groundtruth="paco",
    )

    await create_qa(qa)

    return aimessage
