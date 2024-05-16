from fastapi import APIRouter
from utils.config import database 
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