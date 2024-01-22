from openai import OpenAI
client = OpenAI()
 # api_key=open("API_KEY","r").read())
# api_key=os.environ.get("OPENAI_API_KEY"))

completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    #{"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},
    {"role": "user", "content": "How many countries exist in the world"}
  ]
)

print(completion.choices[0].message)