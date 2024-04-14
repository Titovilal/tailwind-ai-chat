import os
from dotenv import load_dotenv

# Load the environment variables from the .env file
load_dotenv()


def get_url() -> str:
    return os.environ.get('SUPABASE_URL')

def get_key() -> str:
    return os.environ.get('SUPABASE_KEY')