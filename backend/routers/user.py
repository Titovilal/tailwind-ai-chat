from fastapi import APIRouter
from utils.config import database 
from pydantic import BaseModel, EmailStr

router_user = APIRouter(
    prefix="/user",
    tags=["User"],
    responses={404: {"description": "Not found"}},
)

class User(BaseModel):
    email: str
    name: str
    avatar: str

@router_user.get("/")
async def get_users():
    return  database.table('user').select("*").execute()

@router_user.post("/")
async def create_user(user: User) -> User:
     data, count = database.table('user').insert({"email": user.email, "name": user.name}).execute()
     return user