import Link from "next/link";
import { env } from "@/lib/env";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden flex-1 flex-col justify-between bg-primary p-10 text-primary-foreground lg:flex">
        <Link href="/" className="text-lg font-semibold">
          {env.NEXT_PUBLIC_APP_NAME}
        </Link>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Ship faster with a solid foundation</h2>
          <p className="max-w-md text-primary-foreground/80">
            Authentication flows, protected routes, and dashboard layouts are wired and
            ready for your backend.
          </p>
        </div>
        <p className="text-sm text-primary-foreground/60">
          Demo: demo@reflex.ai / password
        </p>
      </div>
      <div className="flex flex-1 items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
