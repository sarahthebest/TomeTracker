import  { createContext, useContext, useState } from 'react';
import { login, logout, secureCall } from './authService.js';  

export const LoginContext = createContext();

export const LoginProvider = ({ children, config }) => {  
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async (username: string, password: string) => {
        setLoading(true);
        try {
            const result = await login(config, username, password);  
            setIsLoggedIn(result.isLoggedIn);
            setError(null);
        } catch (e) {
            setIsLoggedIn(false);
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await logout(config);  
            setIsLoggedIn(false);
        } catch (e) {
            console.error("Logout failed:", e);
        }
    };

    const handleSecureCall = async (url: string, options) => {
        return secureCall(config, url, options);  
    };

    const contextValue = {
        isLoggedIn,
        loading,
        error,
        login: handleLogin,
        logout: handleLogout,
        secureCall: handleSecureCall
    };

    return (
        <LoginContext.Provider value={contextValue}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => useContext(LoginContext);