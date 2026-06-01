import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

interface PageProps {
  readonly params: {
    readonly id: string;
  };
}

export const metadata = createPageMetadata("Page", "Dynamic route page for numeric IDs.");

export default function DynamicPage({ params }: Readonly<PageProps>) {
  const { id } = params;

  return (
    <main className="container-app py-16">
      <div className="space-y-6 rounded-3xl border border-muted/50 bg-background p-10 shadow-lg">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Dynamic page
          </p>
          <h1 className="text-4xl font-bold">Page {id}</h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            This page is rendered from the App Router dynamic route at{" "}
            <code>src/app/[id]/page.tsx</code>.
          </p>
        </div>

        <div className="rounded-2xl bg-muted/30 p-6">
          <p>
            The route <strong>/{id}</strong> is now valid in the App Router. If you need a
            specific static page, create <code>src/app/3/page.tsx</code> instead.
          </p>
        </div>

        <Link href="/" className="text-primary underline hover:text-primary/80">
          Back to home
        </Link>
      </div>
    </main>
  );
}
