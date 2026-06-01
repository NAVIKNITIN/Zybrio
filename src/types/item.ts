export interface Item {
  id: string;
  title: string;
  description: string;
  status: "active" | "archived";
  createdAt: string;
  updatedAt: string;
}

export interface CreateItemPayload {
  title: string;
  description: string;
}

export interface UpdateItemPayload extends Partial<CreateItemPayload> {
  status?: Item["status"];
}
