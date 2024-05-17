from fastapi import APIRouter
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
async def create_qa(qa: QA) -> QA:
    data, count = (
        database.table("qa")
        .insert(
            {
                "chat_id": qa.chat_id,
                "question_id": qa.question_id,
                "answer_id": qa.answer_id,
                "created_at": qa.created_at.isoformat(),
                "status": qa.status,
                "groundtruth": qa.groundtruth,
            }
        )
        .execute()
    )
    return qa
