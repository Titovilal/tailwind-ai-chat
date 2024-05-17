from fastapi import APIRouter
from utils.config import database 
from pydantic import BaseModel, EmailStr
from datetime import date
from utils.models import Chat

router_chat = APIRouter(
    prefix="/chat",
    tags=["Chat"],
    responses={404: {"description": "Not found"}},
)



@router_chat.get("/")
async def get_chats():
    return  database.table('chat').select("*").execute()

@router_chat.post("/")
async def create_chat(chat: Chat) -> Chat:
     data, count = database.table('chat').insert({"account_id": Chat.account_id, "created_at": Chat.created_at}).execute()
     return chat