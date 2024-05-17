from datetime import datetime
from fastapi import APIRouter
from backend.routers.chat import Chat, create_chat
from backend.routers.qa import QA, create_qa
from utils.config import chat_gpt, database 
from pydantic import BaseModel, EmailStr

router_message = APIRouter(
    prefix="/message",
    tags=["Message"],
    responses={404: {"description": "Not found"}},
)

class AIMessage(BaseModel):
    explanation: str
    code: str

class UserMessage(BaseModel):
    question: str

@router_message.get("/questions")
async def get_user_message():
    return  database.table('usermessage').select("*").execute()

@router_message.get("/responses")
async def get_ai_message():
    return  database.table('aimessage').select("*").execute()

@router_message.post("/questions")
async def create_user_message(message: UserMessage) -> UserMessage:
     data, count = database.table('usermessage').insert({"question": message.question }).execute()
     return message

@router_message.post("/responses")
async def create_ai_message(message: AIMessage) -> AIMessage:
     data, count = database.table('aimessage').insert({"explanation": message.explanation, "code": message.code }).execute()
     return message

@router_message.post("/submit") 
async def get_response(chatId: str, question: str, code: str):
    usermessage = UserMessage(question=question)
    create_user_message(usermessage)
    #aimessage = chat_gpt(question)
    aimessage = AIMessage(explanation="Esto es un div", code='<div className="bg-red-500 p-4 rounded"></div>')
    create_ai_message(aimessage)
    qa = QA(chat_id=chatId, question_id=usermessage.id, answer_id=aimessage.id, created_at=datetime.now())
    create_qa(qa)

    return aimessage