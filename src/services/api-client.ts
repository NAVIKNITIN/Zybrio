import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios";
import { env } from "@/lib/env";
import type { ApiErrorResponse } from "@/types/api";

const apiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (typeof window !== "undefined") {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("reflex_auth_token="))
      ?.split("=")[1];

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${decodeURIComponent(token)}`;
    }
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    const message =
      error.response?.data?.message ?? error.message ?? "An unexpected error occurred";
    return Promise.reject(new Error(message));
  },
);

export default apiClient;
