from fastapi import APIRouter
from utils.config import database
from pydantic import BaseModel, EmailStr
from utils.models import Account

router_account = APIRouter(
    prefix="/account",
    tags=["Account"],
    responses={404: {"description": "Not found"}},
)


@router_account.get("/")
async def get_account():
    return database.table("account").select("*").execute()


@router_account.post("/")
async def create_account(account: Account) -> int:
    message_data = account.model_dump()
    response = database.table("qa").insert(message_data).execute()
    account_id = response.data[0]["id"] 
    return account_id
