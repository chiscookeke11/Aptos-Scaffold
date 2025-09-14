import { NextResponse } from "next/server";

// Handle POST request
export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ message: "Compile API working!", data: body });
}

// (Optional) Handle GET request
export async function GET() {
  return NextResponse.json({ message: "Compile API ready" });
}
