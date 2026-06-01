import { NextResponse } from "next/server";
import { itemsStore } from "@/data/items-store";
import type { UpdateItemPayload } from "@/types/item";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const item = itemsStore.getById(id);
  if (!item) {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
  return NextResponse.json({ data: item });
}

export async function PATCH(request: Request, context: RouteContext) {
  const { id } = await context.params;
  const body = (await request.json()) as UpdateItemPayload;
  const item = itemsStore.update(id, body);
  if (!item) {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
  return NextResponse.json({ data: item });
}

export async function DELETE(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const removed = itemsStore.remove(id);
  if (!removed) {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "Deleted" });
}
