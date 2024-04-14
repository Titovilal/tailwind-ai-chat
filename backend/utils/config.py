import os
from variables.variables import get_url, get_key
from supabase import create_client, Client

url: str = get_url()
key: str = get_key()
database: Client = create_client(url, key)