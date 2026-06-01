"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { itemsService } from "@/services/items.service";
import type { CreateItemPayload, Item, UpdateItemPayload } from "@/types/item";

export function useItems() {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchItems = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await itemsService.getAll();
      setItems(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to load items";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadItems() {
      try {
        const data = await itemsService.getAll();
        if (!cancelled) {
          setItems(data);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : "Failed to load items";
          setError(message);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    void loadItems();

    return () => {
      cancelled = true;
    };
  }, []);

  const createItem = useCallback(async (payload: CreateItemPayload) => {
    const item = await itemsService.create(payload);
    setItems((prev) => [item, ...prev]);
    toast.success("Item created");
    return item;
  }, []);

  const updateItem = useCallback(async (id: string, payload: UpdateItemPayload) => {
    const item = await itemsService.update(id, payload);
    setItems((prev) => prev.map((i) => (i.id === id ? item : i)));
    toast.success("Item updated");
    return item;
  }, []);

  const deleteItem = useCallback(async (id: string) => {
    await itemsService.remove(id);
    setItems((prev) => prev.filter((i) => i.id !== id));
    toast.success("Item deleted");
  }, []);

  return {
    items,
    isLoading,
    error,
    refetch: fetchItems,
    createItem,
    updateItem,
    deleteItem,
  };
}
