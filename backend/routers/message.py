from datetime import datetime
from fastapi import APIRouter

from utils.models import UserMessage, AIMessage
from .chat import Chat, create_chat
from .qa import QA, create_qa
from utils.config import chat_gpt, database
from pydantic import BaseModel, EmailStr

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
async def create_user_message(message: UserMessage) -> UserMessage:
    data, count = (
        database.table("usermessage").insert({"question": message.question}).execute()
    )
    return data


@router_message.post("/responses")
async def create_ai_message(message: AIMessage) -> AIMessage:
    data, count = (
        database.table("aimessage")
        .insert({"explanation": message.explanation, "code": message.code})
        .execute()
    )
    return data


from fastapi import Body


@router_message.post("/submit")
async def get_response(
    chatId: str = Body(...), question: str = Body(...), code: str = Body(...)
) -> AIMessage:
    usermessage = UserMessage(question=question)
    user_data = await create_user_message(usermessage)
    user_id = user_data[1][0]["id"]
    # aimessage = chat_gpt(question)
    aimessage = AIMessage(
        explanation="Esto es un div",
        code='<div className="bg-red-500 p-4 rounded"></div>',
    )
    ai_data = await create_ai_message(aimessage)
    ai_id = ai_data[1][0]["id"]

    qa = QA(
        chat_id=chatId,
        question_id=user_id,
        answer_id=ai_id,
        created_at=datetime.now(),
        status="reviewed",
        groundtruth="paco",
    )

    await create_qa(qa)

    return aimessage
