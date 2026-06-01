import apiClient from "@/services/api-client";
import type { ApiResponse } from "@/types/api";
import type { LoginCredentials, RegisterPayload, User } from "@/types/auth";

export interface AuthTokens {
  token: string;
  user: User;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthTokens> {
    const { data } = await apiClient.post<ApiResponse<AuthTokens>>(
      "/auth/login",
      credentials,
    );
    return data.data;
  },

  async register(payload: RegisterPayload): Promise<AuthTokens> {
    const { data } = await apiClient.post<ApiResponse<AuthTokens>>(
      "/auth/register",
      payload,
    );
    return data.data;
  },

  async me(): Promise<User> {
    const { data } = await apiClient.get<ApiResponse<User>>("/auth/me");
    return data.data;
  },

  async logout(): Promise<void> {
    await apiClient.post("/auth/logout");
  },
};
