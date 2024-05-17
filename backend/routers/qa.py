from fastapi import APIRouter
from utils.config import database 
from pydantic import BaseModel, EmailStr
from datetime import date

router_qa = APIRouter(
    prefix="/qa",
    tags=["QA"],
    responses={404: {"description": "Not found"}},
)

class QA(BaseModel):
    chat_id: int
    question_id: int
    answer_id: int
    created_at: date
    groundtruth: str

@router_qa.get("/")
async def get_qa():
    return  database.table('qa').select("*").execute()

@router_qa.post("/")
async def create_qa(qa: QA) -> QA:
     data, count = database.table('qa').insert({"chat_id": qa.chat_id, "question_id": qa.question_id, 
                                                "answer_id": qa.answer_id, "created_at": qa.created_at}).execute()
     return qa