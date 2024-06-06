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
    data = (await response.json()) as AIMessage;
  } catch (err: any) {
    console.error("Something went wrong: ", err);
  }
  return data;
}

// export async function submitQuestion(
//   chatId: string,
//   question: string,
//   code: string
// ): Promise<AIMessage | null> {
//   let data = null;

//   try {
//     await new Promise((resolve) => setTimeout(resolve, 1200));
//     data = {
//       id: Math.floor(Math.random() * 100000).toString(),
//       code: "este es el codigo <div> xd</div>" + Math.floor(Math.random() * 100000).toString(),
//       explanation:
//         "lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     };
//   } catch (err: any) {
//     console.error("Something went wrong: ", err);
//   }
//   return data;
// }
