import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />;
};
