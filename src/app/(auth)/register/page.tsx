import { RegisterForm } from "@/features/auth/register-form";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Create account",
  "Register a new account to get started.",
);

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center lg:text-left">
        <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
        <p className="text-sm text-muted-foreground">
          Start building with the starter template.
        </p>
      </div>
      <RegisterForm />
    </div>
  );
}
