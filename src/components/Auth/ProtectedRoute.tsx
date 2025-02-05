import { memo, useEffect } from "react";
import { useAuthStore } from "../../stores/authStore";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = memo(({ children }: { children: React.ReactNode }) => {
    const { isLoggedIn, checkAuthStatus  } = useAuthStore();

    useEffect(() => {
        checkAuthStatus();
    }, [checkAuthStatus]);

    return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />;
});
