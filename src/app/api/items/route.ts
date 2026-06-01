import { NextResponse } from "next/server";
import { itemsStore } from "@/data/items-store";
import type { CreateItemPayload } from "@/types/item";

export async function GET() {
  return NextResponse.json({ data: itemsStore.getAll() });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CreateItemPayload;
    if (!body.title || !body.description) {
      return NextResponse.json(
        { message: "Title and description are required" },
        { status: 400 },
      );
    }
    const item = itemsStore.create(body);
    return NextResponse.json({ data: item }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
  }
}
