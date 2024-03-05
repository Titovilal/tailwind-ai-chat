import uvicorn
from fastapi import FastAPI

app = FastAPI(
    title="Tailwind AI Chatbot API",
    description="",
    version="0.1.0",
)

app.include_router(router_regex)
app.include_router(router_adverse_factors)

if __name__ == "__main__":

    uvicorn.run(app, host="localhost", port=8000)
