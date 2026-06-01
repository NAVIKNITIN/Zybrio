import { LoginForm } from "@/features/auth/login-form";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("Sign in", "Access your dashboard account.");

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center lg:text-left">
        <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Sign in to continue to your dashboard.
        </p>
      </div>
      <LoginForm />
    </div>
  );
}
