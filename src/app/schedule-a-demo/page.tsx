import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Schedule a demo",
  "Book a live demo of ReflexAI.",
);

export default function ScheduleDemoPage() {
  return (
    <main className="container-app py-16">
      <div className="rounded-3xl border border-muted/50 bg-background p-10 shadow-lg">
        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Schedule a demo
            </p>
            <h1 className="text-4xl font-bold">Book your demo</h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              We&rsquo;re excited to show you how ReflexAI can help your team train faster
              and operate smarter.
            </p>
          </div>

          <div className="rounded-2xl bg-muted/30 p-6">
            <p className="text-base text-muted-foreground">
              This is a placeholder page for <code>/schedule-a-demo</code>. Replace this
              with your scheduling flow or contact form.
            </p>
          </div>

          <Link href="/" className="text-primary underline hover:text-primary/80">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
