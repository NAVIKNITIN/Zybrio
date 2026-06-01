"use client";

import dynamic from "next/dynamic";
import { memo, useCallback, useMemo, useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { AppButton } from "@/components/common/app-button";
import { AppModal } from "@/components/common/app-modal";
import { DataTable, type DataTableColumn } from "@/components/common/data-table";
import { EmptyState } from "@/components/common/empty-state";
import { ErrorState } from "@/components/common/error-state";
import { LoadingState } from "@/components/common/loading-state";
import { Section } from "@/components/common/section";
import { ItemForm } from "@/features/items/item-form";
import type { ItemFormValues } from "@/features/items/schemas";
import { useItems } from "@/hooks/use-items";
import type { Item } from "@/types/item";
import { formatDate } from "@/utils/format";

const MotionSection = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false },
);

function ItemsManagerComponent() {
  const { items, isLoading, error, refetch, createItem, updateItem, deleteItem } =
    useItems();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const openCreate = useCallback(() => {
    setEditingItem(null);
    setModalOpen(true);
  }, []);

  const openEdit = useCallback((item: Item) => {
    setEditingItem(item);
    setModalOpen(true);
  }, []);

  const handleSubmit = useCallback(
    async (values: ItemFormValues) => {
      if (editingItem) {
        await updateItem(editingItem.id, values);
      } else {
        await createItem(values);
      }
      setModalOpen(false);
      setEditingItem(null);
    },
    [createItem, editingItem, updateItem],
  );

  const columns = useMemo<DataTableColumn<Item>[]>(
    () => [
      { key: "title", header: "Title" },
      {
        key: "description",
        header: "Description",
        className: "max-w-xs truncate",
        render: (row) => (
          <span className="line-clamp-1 text-muted-foreground">{row.description}</span>
        ),
      },
      {
        key: "status",
        header: "Status",
        render: (row) => (
          <span className="rounded-full bg-secondary px-2 py-0.5 text-xs capitalize">
            {row.status}
          </span>
        ),
      },
      {
        key: "createdAt",
        header: "Created",
        render: (row) => formatDate(row.createdAt),
      },
      {
        key: "actions",
        header: "",
        render: (row) => (
          <div className="flex justify-end gap-1">
            <AppButton variant="ghost" size="icon" onClick={() => openEdit(row)}>
              <Pencil className="size-4" />
            </AppButton>
            <AppButton
              variant="ghost"
              size="icon"
              onClick={() => void deleteItem(row.id)}
            >
              <Trash2 className="size-4 text-destructive" />
            </AppButton>
          </div>
        ),
      },
    ],
    [deleteItem, openEdit],
  );

  return (
    <Section
      title="Items"
      description="Example CRUD flow with API integration, validation, and table UI."
      actions={
        <AppButton onClick={openCreate}>
          <Plus className="size-4" />
          Add item
        </AppButton>
      }
    >
      {isLoading && <LoadingState message="Loading items..." />}
      {!isLoading && error && <ErrorState message={error} onRetry={() => void refetch()} />}
      {!isLoading && !error && items.length === 0 && (
        <EmptyState
          title="No items yet"
          description="Create your first item to see the table in action."
          actionLabel="Add item"
          onAction={openCreate}
        />
      )}
      {!isLoading && !error && items.length > 0 && (
        <MotionSection
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <DataTable columns={columns} data={items} keyExtractor={(row) => row.id} />
        </MotionSection>
      )}

      <AppModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title={editingItem ? "Edit item" : "Create item"}
        description="Validated with React Hook Form and Zod."
      >
        <ItemForm
          key={editingItem?.id ?? "new"}
          defaultValues={editingItem ?? undefined}
          onSubmit={handleSubmit}
          submitLabel={editingItem ? "Update" : "Create"}
        />
      </AppModal>
    </Section>
  );
}

export const ItemsManager = memo(ItemsManagerComponent);
