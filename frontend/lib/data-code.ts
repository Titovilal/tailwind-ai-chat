export async function submitQuestion(
  chatId: string,
  question: string,
  code?: string
): Promise<AIMessage | null> {
  let data = null;
  const url = "http://localhost:8001/message/submit";

  const body: any = {
    chatId: chatId,
    question: question,
    code: "",
  };

  if (code !== undefined) {
    body.code = code;
  }
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const paco = await response.json()
    data = (paco) as AIMessage;
    console.log(paco)
  } catch (err: any) {
    console.error("Something went wrong: ", err);
  }
  return data;
}

