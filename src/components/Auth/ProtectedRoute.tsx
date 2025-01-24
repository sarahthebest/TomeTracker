import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};
