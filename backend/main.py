import uvicorn
from fastapi import FastAPI

from routers.code import router_code

app = FastAPI(
    title="Tailwind AI Chatbot API",
    description="",
    version="0.1.0",
)

app.include_router(router_code)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8001)
