import { NextResponse } from "next/server";
import type { RegisterPayload } from "@/types/auth";

export async function POST(request: Request) {
  const body = (await request.json()) as RegisterPayload;

  if (!body.name || !body.email || !body.password) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }

  const user = {
    id: `user_${Date.now()}`,
    name: body.name,
    email: body.email,
    role: "user" as const,
  };
  const token = `demo_token_${Date.now()}`;

  const response = NextResponse.json({
    data: { token, user },
    message: "Registration successful",
  });
  response.cookies.set("reflex_auth_token", token, {
    httpOnly: false,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
