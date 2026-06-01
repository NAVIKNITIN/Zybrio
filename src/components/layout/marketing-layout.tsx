import { Navbar } from "@/components/layout/navbar";

export function MarketingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-[white]">{children}</main>
    </div>
  );
}
