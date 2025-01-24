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
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    logout: () => void;
    checkAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
    logout: () => {},
    checkAuthStatus: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const logout = () => {
        document.cookie = "accessToken=; Max-Age=0; path=/;";
        setIsAuthenticated(false);
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
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.error(
                "Error checking auth status:",
                getErrorMessage(error)
            );
            setIsAuthenticated(false);
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
            isAuthenticated,
            setIsAuthenticated,
            logout,
            checkAuthStatus,
        }),
        [isAuthenticated]
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
