import { createUserMessage, createAIMessage, createQA } from "@/lib/queries";
import { NextResponse, NextRequest } from "next/server";
import OpenAI from "openai";

export async function GET() {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
  });

  const stream = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content:
          "You are an assistant that reviews and modifies HTML code using Tailwind CSS.",
      },
    ],
    stream: false,
  });

  console.log(stream);
  return NextResponse.json({ status: "200", message: "OK" });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  let chatId = body.chatId;
  let question = body.question;
  let code = body.code;

  // Crear mensaje de usuario y mandarlo a la base de datos
  const usermessage: UserMessage = { question: question };

  // Guardar mensaje de usuario en la BBDD
  var account_id = await createUserMessage(usermessage);

  // Crear prompt dependiendo de si se usa el código
  let role = "";
  let prompt = "";
  if (code == "") {
    role =
      "You are an assistant that writes Tailwind code. Your response should be in JSON format, with the following keys: explanation, code. In the explanation i want only text that explains the code, and in code i want only the tailwind code.";
    prompt = question;
  } else {
    role =
      "You are an assistant that reviews and modifies HTML code using Tailwind CSS. Your response should be in JSON format, with the following keys: explanation, code. In the explanation i want only text that explains the modifications, and in code i want the modified Tailwind code.";
    prompt =
      "Here is some HTML code:\n```html\n" +
      `${code}` +
      "\n```\n" +
      `Please modify this code according to the following instruction: ${question}`;
  }

  // Hacer llamada a API GPT
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
  });

  async function createChatCompletion(role: string, content: string) {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: role },
        { role: "user", content: content },
      ],
      stream: false,
    });
    return response.choices[0].message.content;
  }

  let response = await createChatCompletion(role, prompt);

  if (response === null) {
    throw new Error("Response is null");
  }

  // Crear AIMessage con los valores de EXPLANATION y CODE
  const responseJson: {
    explanation: string;
    code: string;
  } = await JSON.parse(response);

  const response_explanation = responseJson.explanation;
  const response_code = responseJson.code;

  const aimessage: AIMessageResponse = {
    explanation: response_explanation,
    code: response_code,
  };

  // Guardar AIMessage en la BBDD
  var ai_id = await createAIMessage(aimessage);

  //Crear objeto de respuesta
  const aiMessageResponse: AIMessage = {
    id: ai_id.toString(),
    explanation: response_explanation,
    code: response_code,
  };

  // Crear objeto QA
  const qa: QAResponse = {
    chat_id: chatId,
    question_id: account_id,
    answer_id: ai_id,
    created_at: new Date(),
    status: "like",
    groundtruth: "paco",
  };
  // Guardar QA en la BBDD
  await createQA(qa);

  // Devolver objeto AIMessageResponse
  return NextResponse.json(aiMessageResponse);
}
