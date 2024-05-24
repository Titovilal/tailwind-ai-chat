from fastapi import APIRouter, HTTPException
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
async def create_chat(chat: Chat) -> int:
    chat_data = chat.model_dump()
    chat_data["created_at"] = chat_data["created_at"].isoformat()
    response = database.table("chat").insert(chat_data).execute()
    chat_id = response.data[0]["id"] 
    return chat_id