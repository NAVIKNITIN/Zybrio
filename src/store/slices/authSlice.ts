import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { AUTH_STORAGE_KEY } from "@/constants/auth";
import type { AuthState, User } from "@/types/auth";
import { getStorageItem, removeStorageItem, setStorageItem } from "@/utils/storage";

const storedUser = getStorageItem<User>(AUTH_STORAGE_KEY);

const initialState: AuthState = {
  user: storedUser,
  token: null,
  isAuthenticated: Boolean(storedUser),
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLoading = false;
      setStorageItem(AUTH_STORAGE_KEY, action.payload.user);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      removeStorageItem(AUTH_STORAGE_KEY);
    },
    hydrateUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isAuthenticated = Boolean(action.payload);
    },
  },
});

export const { setCredentials, setLoading, logout, hydrateUser } = authSlice.actions;
export default authSlice.reducer;
