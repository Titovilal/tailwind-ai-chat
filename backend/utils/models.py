from pydantic import BaseModel
from datetime import datetime


class QA(BaseModel):
    chat_id: int
    question_id: int
    answer_id: int
    created_at: datetime
    status: str
    groundtruth: str


class Chat(BaseModel):
    account_id: int
    created_at: datetime


class AIMessage(BaseModel):
    explanation: str
    code: str


class UserMessage(BaseModel):
    question: str


class Account(BaseModel):
    email: str
    name: str
    avatar: str
