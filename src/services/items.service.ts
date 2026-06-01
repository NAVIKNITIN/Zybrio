import apiClient from "@/services/api-client";
import type { ApiResponse } from "@/types/api";
import type { CreateItemPayload, Item, UpdateItemPayload } from "@/types/item";

export const itemsService = {
  async getAll(): Promise<Item[]> {
    const { data } = await apiClient.get<ApiResponse<Item[]>>("/items");
    return data.data;
  },

  async getById(id: string): Promise<Item> {
    const { data } = await apiClient.get<ApiResponse<Item>>(`/items/${id}`);
    return data.data;
  },

  async create(payload: CreateItemPayload): Promise<Item> {
    const { data } = await apiClient.post<ApiResponse<Item>>("/items", payload);
    return data.data;
  },

  async update(id: string, payload: UpdateItemPayload): Promise<Item> {
    const { data } = await apiClient.patch<ApiResponse<Item>>(
      `/items/${id}`,
      payload,
    );
    return data.data;
  },

  async remove(id: string): Promise<void> {
    await apiClient.delete(`/items/${id}`);
  },
};
