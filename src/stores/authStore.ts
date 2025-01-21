import { create } from "zustand";

interface AuthState {
    email: string;
    password: string;
    username: string;
    error: string;
    success: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setUsername: (username: string) => void;
    setError: (error: string) => void;
    setSuccess: (error: string) => void;
    reset: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    email: "",
    password: "",
    username: "",
    error: "",
    success: "",
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    setUsername: (username) => set({ username }),
    setError: (error) => set({ error }),
    setSuccess: (success) => set({ success }),
    reset: () =>
        set({
            email: "",
            password: "",
            username: "",
            error: "",
        }),
}));
