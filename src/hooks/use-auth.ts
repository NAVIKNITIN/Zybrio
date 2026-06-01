"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ROUTES } from "@/constants/routes";
import { authService } from "@/services/auth.service";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout as logoutAction, setCredentials, setLoading } from "@/store/slices/authSlice";
import type { LoginCredentials, RegisterPayload } from "@/types/auth";
import { clearAuthCookie, setAuthCookie } from "@/utils/cookies";

export function useAuth() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAppSelector((state) => state.auth);

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      dispatch(setLoading(true));
      try {
        const { token, user: authUser } = await authService.login(credentials);
        setAuthCookie(token);
        dispatch(setCredentials({ user: authUser, token }));
        toast.success("Welcome back!");
        router.push(ROUTES.dashboard);
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Login failed");
        throw error;
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch, router],
  );

  const register = useCallback(
    async (payload: RegisterPayload) => {
      dispatch(setLoading(true));
      try {
        const { token, user: authUser } = await authService.register(payload);
        setAuthCookie(token);
        dispatch(setCredentials({ user: authUser, token }));
        toast.success("Account created successfully!");
        router.push(ROUTES.dashboard);
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Registration failed");
        throw error;
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch, router],
  );

  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } catch {
      // Proceed with client-side logout even if API fails
    }
    clearAuthCookie();
    dispatch(logoutAction());
    toast.info("You have been signed out.");
    router.push(ROUTES.login);
  }, [dispatch, router]);

  return { user, isAuthenticated, isLoading, login, register, logout };
}
