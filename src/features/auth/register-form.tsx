"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppButton } from "@/components/common/app-button";
import { AppInput } from "@/components/common/app-input";
import { registerSchema, type RegisterFormValues } from "@/features/auth/schemas";
import { useAuth } from "@/hooks/use-auth";
import { ROUTES } from "@/constants/routes";

export function RegisterForm() {
  const { register: registerUser, isLoading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = handleSubmit(async (values) => {
    await registerUser(values);
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <AppInput
        label="Full name"
        autoComplete="name"
        error={errors.name?.message}
        {...register("name")}
      />
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
        autoComplete="new-password"
        hint="Minimum 6 characters"
        error={errors.password?.message}
        {...register("password")}
      />
      <AppButton type="submit" className="w-full" isLoading={isLoading}>
        Create account
      </AppButton>
      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href={ROUTES.login} className="font-medium text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}
