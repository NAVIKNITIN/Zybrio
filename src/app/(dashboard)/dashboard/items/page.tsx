import dynamic from "next/dynamic";
import { createPageMetadata } from "@/lib/metadata";

const ItemsManager = dynamic(
  () => import("@/features/items/items-manager").then((m) => m.ItemsManager),
  {
    loading: () => (
      <div className="flex h-48 items-center justify-center text-muted-foreground">
        Loading items...
      </div>
    ),
  },
);

export const metadata = createPageMetadata(
  "Items",
  "Manage items with full CRUD example.",
);

export default function ItemsPage() {
  return <ItemsManager />;
}
