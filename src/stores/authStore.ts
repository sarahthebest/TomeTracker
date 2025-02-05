import { create } from "zustand";
import axios from "axios";
import { getErrorMessage } from "../utils/globalUtils";

interface AuthStore {
    isLoggedIn: boolean;
    setIsLoggedIn: (loggedIn: boolean) => void;
    logout: () => void;
    checkAuthStatus: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
    isLoggedIn: false, 
    setIsLoggedIn: (loggedIn) => {
        if (get().isLoggedIn !== loggedIn) {
            set({ isLoggedIn: loggedIn });
        }
    },
    logout: () => {
        document.cookie = "accessToken=; Max-Age=0; path=/;";
        set({ isLoggedIn: false });
    },
    checkAuthStatus: async () => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/auth/verify",
                {},
                {
                    withCredentials: true,
                }
            );

            const loggedIn = res.data.user ? true : false;
            if (get().isLoggedIn !== loggedIn) {
                set({ isLoggedIn: loggedIn });
            }
        } catch (error) {
            console.error("Error checking auth status:", getErrorMessage(error));
            set({ isLoggedIn: false });
        }
    },
}));
