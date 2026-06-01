import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.headers.get("authorization")?.replace("Bearer ", "");
  const cookieToken = request.cookies.get("reflex_auth_token")?.value;

  if (!token && !cookieToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    data: {
      id: "user_1",
      name: "Demo User",
      email: "demo@reflex.ai",
      role: "admin",
    },
  });
}
