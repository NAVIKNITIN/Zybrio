import type { CreateItemPayload, Item, UpdateItemPayload } from "@/types/item";

let items: Item[] = [
  {
    id: "1",
    title: "Welcome item",
    description: "Sample record from the in-memory API store.",
    status: "active",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Archived example",
    description: "Demonstrates status filtering in the dashboard.",
    status: "archived",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

function generateId(): string {
  return crypto.randomUUID();
}

export const itemsStore = {
  getAll(): Item[] {
    return [...items].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  },

  getById(id: string): Item | undefined {
    return items.find((item) => item.id === id);
  },

  create(payload: CreateItemPayload): Item {
    const now = new Date().toISOString();
    const item: Item = {
      id: generateId(),
      ...payload,
      status: "active",
      createdAt: now,
      updatedAt: now,
    };
    items = [item, ...items];
    return item;
  },

  update(id: string, payload: UpdateItemPayload): Item | undefined {
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return undefined;
    const updated: Item = {
      ...items[index],
      ...payload,
      updatedAt: new Date().toISOString(),
    };
    items[index] = updated;
    return updated;
  },

  remove(id: string): boolean {
    const before = items.length;
    items = items.filter((item) => item.id !== id);
    return items.length < before;
  },
};
