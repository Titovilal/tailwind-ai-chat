from fastapi import APIRouter, HTTPException
from utils.models import QA
from utils.config import database
from datetime import date

router_qa = APIRouter(
    prefix="/qa",
    tags=["QA"],
    responses={404: {"description": "Not found"}},
)


@router_qa.get("/")
async def get_qa():
    return database.table("qa").select("*").execute()


@router_qa.post("/")
async def create_qa(qa: QA) -> int:
    message_data = qa.model_dump()
    message_data["created_at"] = message_data["created_at"].isoformat()
    response = database.table("qa").insert(message_data).execute()
    qa_id = response.data[0]["id"] 
    return qa_id
