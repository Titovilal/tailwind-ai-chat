import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.chat import router_chat
from routers.message import router_message
from routers.account import router_account
from routers.qa import router_qa

app = FastAPI(
    title="Tailwind AI Chatbot API",
    description="",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router_chat)
app.include_router(router_message)
app.include_router(router_account)
app.include_router(router_qa)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8001)
