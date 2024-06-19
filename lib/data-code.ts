export async function submitQuestion(
  chatId: string,
  question: string,
  code?: string
): Promise<AIMessage | null> {
  let aiMessage = null;
  const url = "/api/messages";

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
    const aiMessage_raw = await response.json();
    aiMessage = aiMessage_raw as AIMessage;
    console.log(aiMessage_raw);
  } catch (err: any) {
    console.error("Something went wrong: ", err);
  }
  return aiMessage;
}
