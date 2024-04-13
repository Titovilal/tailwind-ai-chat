from fastapi import APIRouter
from utils.config import database 
from pydantic import BaseModel, EmailStr

router_message = APIRouter(
    prefix="/message",
    tags=["Message"],
    responses={404: {"description": "Not found"}},
)

class Message(BaseModel):
    content: str
    is_ai: bool

@router_message.get("/")
async def get_message():
    return  database.table('messages').select("*").execute()

@router_message.post("/")
async def create_user(message: Message) -> Message:
     data, count = database.table('users').insert({"content": message.content, "is_ai": message.is_ai }).execute()
     return message