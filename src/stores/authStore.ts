import { create } from "zustand";

interface AuthState {
  email: string;
  password: string;
  username: string;
  error: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setUsername: (username: string) => void;
  setError: (error: string) => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  email: "",
  password: "",
  username: "",
  error: "",
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setUsername: (username) => set({ username }),
  setError: (error) => set({ error }),
  reset: () =>
    set({
      email: "",
      password: "",
      username: "",
      error: "",
    }),
}));
