import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "200", message: "OK" });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  return NextResponse.json({ status: "200", message: "OK" });
}