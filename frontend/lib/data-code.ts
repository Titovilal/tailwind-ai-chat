import ENDPOINTS from "./utils";

export async function submitQuestion(
  chatId: string,
  question: string,
  code: string
): Promise<AIMessage> {
  const url = "http://localhost:8001/message/submit";
  const headers = {
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    chatId: chatId,
    question: question,
    code: code,
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    });
    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as AIMessage;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to submit question: ", error);
    throw error;
  }
}
