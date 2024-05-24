export async function submitQuestion(
  chatId: string,
  question: string,
  code: string
) {
  const url = "http://localhost:8001/message/submit";
  const headers = {
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    chatId: chatId,
    question: question,
    code: code,
  });

  let data = null;
  let loading = false;
  let error = null;
  try {
    loading = true;
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = (await response.json()) as AIMessage;
  } catch (err) {
    error = err;
  } finally {
    loading = false;
  }
  return { data, loading, error };
}

export async function submitQuestionTest(
  chatId: string,
  question: string,
  code: string
): Promise<QA | null> {
  let data = null;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    data = {
      id: "789",
      question: {
        id: "456",
        question: "",
      },
      answer: {
        id: "123",
        code: "este es el codigo <div> xd</div>",
        explanation:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    };
  } catch (err: any) {
    console.error("Something went wrong: ", err);
  }
  return data;
}
