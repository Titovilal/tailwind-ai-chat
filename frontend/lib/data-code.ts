export async function submitQuestion1(
  chatId: string,
  question: string,
  code: string
): Promise<AIMessage | null> {
  let data = null;
  const url = "http://localhost:8001/message/submit";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chatId: chatId,
        question: question,
        code: code,
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = (await response.json()) as AIMessage;
  } catch (err: any) {
    console.error("Something went wrong: ", err);
  }
  return data;
}

export async function submitQuestionTest(
  chatId: string,
  question: string,
  code: string
): Promise<AIMessage | null> {
  let data = null;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    data = {
      id: "123",
      code: "este es el codigo <div> xd</div>",
      explanation:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    };
  } catch (err: any) {
    console.error("Something went wrong: ", err);
  }
  return data;
}
