from enum import Enum
from typing import Optional
from pydantic import BaseModel
from datetime import datetime

class StatusType(str, Enum):
    like = 'like'
    dislike = 'dislike'
    reviewed = 'reviewed'

class QA(BaseModel):
    chat_id: int
    question_id: int
    answer_id: int
    created_at: datetime
    status: StatusType
    groundtruth: Optional[str] = None


class Chat(BaseModel):
    account_id: int
    created_at: datetime


class AIMessageResponse(BaseModel):
    id: int
    explanation: str
    code: str

class AIMessage(BaseModel):
    explanation: str
    code: str

class UserMessage(BaseModel):
    question: str


class Account(BaseModel):
    email: str
    name: str
    avatar: Optional[str] = None
