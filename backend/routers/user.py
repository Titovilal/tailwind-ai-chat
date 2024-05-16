from fastapi import APIRouter
from utils.config import database 
from pydantic import BaseModel, EmailStr

router_user = APIRouter(
    prefix="/account",
    tags=["Account"],
    responses={404: {"description": "Not found"}},
)

class Account(BaseModel):
    email: str
    name: str
    avatar: str

@router_user.get("/")
async def get_account():
    return  database.table('account').select("*").execute()

@router_user.post("/")
async def create_account(account: Account) -> Account:
     data, count = database.table('account').insert({"email": account.email, "name": account.name}).execute()
     return account