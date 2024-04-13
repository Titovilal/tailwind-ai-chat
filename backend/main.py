import uvicorn
from fastapi import FastAPI

from routers.chat import router_chat
from routers.message import router_message
from routers.user import router_user

app = FastAPI(
    title="Tailwind AI Chatbot API",
    description="",
    version="0.1.0",
)

app.include_router(router_chat)
app.include_router(router_message)
app.include_router(router_user)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8001)
