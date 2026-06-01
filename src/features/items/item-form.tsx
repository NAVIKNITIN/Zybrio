"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppButton } from "@/components/common/app-button";
import { AppInput } from "@/components/common/app-input";
import { itemSchema, type ItemFormValues } from "@/features/items/schemas";

interface ItemFormProps {
  defaultValues?: Partial<ItemFormValues>;
  onSubmit: (values: ItemFormValues) => Promise<void>;
  submitLabel?: string;
}

export function ItemForm({
  defaultValues,
  onSubmit,
  submitLabel = "Save item",
}: ItemFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ItemFormValues>({
    resolver: zodResolver(itemSchema),
    defaultValues: {
      title: defaultValues?.title ?? "",
      description: defaultValues?.description ?? "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <AppInput
        label="Title"
        error={errors.title?.message}
        {...register("title")}
      />
      <AppInput
        label="Description"
        error={errors.description?.message}
        {...register("description")}
      />
      <AppButton type="submit" isLoading={isSubmitting}>
        {submitLabel}
      </AppButton>
    </form>
  );
}
