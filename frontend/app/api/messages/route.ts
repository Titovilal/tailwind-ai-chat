import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "200", message: "OK" });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Crear mensaje de usuario y mandarlo a la base de datos
  const userMessage: UserMessage = body; // TODO Comprobar

  // Guardar mensaje de usuaroi en la BBDD
  // TODO

  // Crear prompt dependiendo de si se usa el código
  // TODO

  // Hacer llamada a API GPT
  // TODO

  // Cargar respuesta en EXPLANATION y CODE
  // TODO

  // Crear AIMessage con los valores de EXPLANATION y CODE
  // TODO

  // Guardar AIMessage en la BBDD
  // TODO

  // Crear objeto QA
  // TODO

  // Guardar QA en la BBDD
  // TODO

  // Devolver objeto AIMessageResponse
  // TODO

  return NextResponse.json({ status: "200", message: "OK" });
}
