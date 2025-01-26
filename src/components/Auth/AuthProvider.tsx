import axios from "axios";
import React, {
    useState,
    useEffect,
    createContext,
    useContext,
    useMemo,
} from "react";
import { getErrorMessage } from "../../utils/globalUtils";

interface AuthContextType {
    isLoggedIn: boolean;
    SetisLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    logout: () => void;
    checkAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    SetisLoggedIn: () => {},
    logout: () => {},
    checkAuthStatus: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isLoggedIn, SetisLoggedIn] = useState(false);

    console.log()

    const logout = () => {
        document.cookie = "accessToken=; Max-Age=0; path=/;";
        SetisLoggedIn(false);
    };

    const checkAuthStatus = async () => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/auth/verify",
                {},
                {
                    withCredentials: true,
                }
            );
            console.log("Auth verification response:", res.data);
            if (res.data.user) {
                SetisLoggedIn(true);
            } else {
                SetisLoggedIn(false);
            }
        } catch (error) {
            console.error(
                "Error checking auth status:",
                getErrorMessage(error)
            );
            SetisLoggedIn(false);
        }
    };

    const refreshToken = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/refresh",
                {
                    method: "POST",
                    credentials: "include",
                }
            );

            if (response.ok) {
                console.log("Access token refreshed!");
                return true;
            } else {
                console.error("Failed to refresh token.");
                return false;
            }
        } catch (error) {
            console.error("Error refreshing token:", error);
            return false;
        }
    };

    useEffect(() => {
        const initializeAuth = async () => {
            await checkAuthStatus();
        };
        initializeAuth();
    }, []);

    const value = useMemo(
        () => ({
            isLoggedIn,
            SetisLoggedIn,
            logout,
            checkAuthStatus,
        }),
        [isLoggedIn]
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
