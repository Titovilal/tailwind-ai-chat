from supabase import create_client, Client
from openai import OpenAI
from dotenv import load_dotenv
import os


load_dotenv()

database: Client = create_client(
    os.environ.get("SUPABASE_URL"), os.environ.get("SUPABASE_KEY")
)
openai_client = OpenAI(api_key=os.environ.get("OPENAI_KEY"))


def chat_gpt(
    message: str,
    client: OpenAI = openai_client,
    role: str = "You are a helpful assistant.",
    model: str = "gpt-3.5-turbo",
) -> str:
    completion = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": role},
            {"role": "user", "content": message},
        ],
    )

    return completion.choices[0].message.content
