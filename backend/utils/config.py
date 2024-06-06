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
    role: str = "You are an assistant that writes Tailwind code. Your response should be in JSON format, with the following keys: explanation, code. In the explanation i want only text that explains the code, and in code i want only the tailwind code",
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

