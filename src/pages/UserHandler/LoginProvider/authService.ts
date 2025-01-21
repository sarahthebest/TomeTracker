import axios, { AxiosError } from "axios";
import { ApiResponse, LoginRequest, LoginResponse } from "../../../types/global.types";

export async function login(config: { apiUrl: string }, username: string, password: string): Promise<ApiResponse<LoginResponse>> {
    const { apiUrl } = config;
    const loginData: LoginRequest = { username, password };

    try {
        const response = await axios.post<ApiResponse<LoginResponse>>(
            `${apiUrl}/login`,
            loginData,
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            }
        );

        const { csrfToken } = response.data.data;
        sessionStorage.setItem('csrfToken', csrfToken);

        return response.data;

    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            throw new Error(`Login failed: ${error.response?.statusText || error.message}`);
        }
        throw new Error(`Login failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
};

export async function refresh(config: { apiUrl: string }) {
    const { apiUrl } = config;

    try {
        const response = await axios.post(`${apiUrl}/refresh`, {}, { withCredentials: true });

        sessionStorage.setItem('csrfToken', response.data.csrfToken);

        return { success: true, csrfToken: response.data.csrfToken };
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            throw new Error(`Token refresh failed: ${error.response?.statusText || error.message}`);
        }
        throw new Error(`Token refresh failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export async function logout(config: { apiUrl: string }) {
    const { apiUrl } = config;

    try {
        const response = await axios.post(`${apiUrl}/logout`, {}, { withCredentials: true });

        if (response.status !== 200) {
            throw new Error(`Logout failed: ${response.statusText}`);
        }

        sessionStorage.removeItem('csrfToken');

        return { isLoggedIn: false };
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            console.error('Logout error:', error.message);
            throw new Error(`Logout failed: ${error.response?.statusText || error.message}`);
        }
        throw new Error(`Logout failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
};

interface SecureCallConfig {
    apiUrl: string;
}

interface SecureCallOptions extends RequestInit {
    headers?: Record<string, string>;
}

export async function secureCall(
    config: SecureCallConfig,
    url: string,
    options: SecureCallOptions = {}
): Promise<any> {
    const { apiUrl } = config;
    const csrfToken = sessionStorage.getItem('csrfToken');

    try {
        const headers: HeadersInit = {
            ...options.headers,
            'Content-Type': 'Content-Type' in options.headers ? options.headers['Content-Type'] : 'application/json',
        };

        if (csrfToken) {
            headers['X-CSRF-Token'] = csrfToken;
        }

        let response = await fetch(`${apiUrl}${url}`, {
            ...options,
            headers: headers,
            credentials: 'include'
        });

        if (response.status === 403) {
            await refresh(config);
            response = await fetch(`${apiUrl}${url}`, {
                ...options,
                headers: {
                    ...options.headers,
                    'X-CSRF-Token': sessionStorage.getItem('csrfToken')
                },
                credentials: 'include'
            });
        }

        if (!response.ok) {
            throw new Error(`API call to ${url} failed: ${response.statusText}`);
        }

        return await response.json();
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            throw new Error(`API call to ${url} failed with axios: ${error.response?.statusText || error.message}`);
        } else if (error instanceof Error) {
            throw new Error(`API call to ${url} failed with error: ${error.message}`);
        } else {
            throw new Error(`API call to ${url} failed with unknown error`);
        }
    }
};