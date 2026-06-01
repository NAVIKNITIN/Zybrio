import { NextResponse } from "next/server";
import type { LoginCredentials } from "@/types/auth";

const DEMO_USER = {
  id: "user_1",
  name: "Demo User",
  email: "demo@reflex.ai",
  role: "admin" as const,
  avatarUrl: undefined,
};

export async function POST(request: Request) {
  const body = (await request.json()) as LoginCredentials;

  if (body.email === "demo@reflex.ai" && body.password === "password") {
    const token = `demo_token_${Date.now()}`;
    const response = NextResponse.json({
      data: { token, user: DEMO_USER },
      message: "Login successful",
    });
    response.cookies.set("reflex_auth_token", token, {
      httpOnly: false,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  }

  return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
}
