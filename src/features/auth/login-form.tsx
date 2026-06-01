"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppButton } from "@/components/common/app-button";
import { AppInput } from "@/components/common/app-input";
import { loginSchema, type LoginFormValues } from "@/features/auth/schemas";
import { useAuth } from "@/hooks/use-auth";
import { ROUTES } from "@/constants/routes";

export function LoginForm() {
  const { login, isLoading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "demo@reflex.ai", password: "password" },
  });

  const onSubmit = handleSubmit(async (values) => {
    await login(values);
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <AppInput
        label="Email"
        type="email"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />
      <AppInput
        label="Password"
        type="password"
        autoComplete="current-password"
        error={errors.password?.message}
        {...register("password")}
      />
      <AppButton type="submit" className="w-full" isLoading={isLoading}>
        Sign in
      </AppButton>
      <p className="text-center text-sm text-muted-foreground">
        No account?{" "}
        <Link href={ROUTES.register} className="font-medium text-primary hover:underline">
          Create one
        </Link>
      </p>
    </form>
  );
}
