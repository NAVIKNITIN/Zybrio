import { z } from "zod";

export const itemSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().min(5, "Description must be at least 5 characters"),
});

export type ItemFormValues = z.infer<typeof itemSchema>;
