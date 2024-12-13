import axios from "axios";

export function getErrorMessage(error: unknown): string {
    if (axios.isAxiosError(error)) {
        return (
            error.response?.data?.message || 
            error.response?.data?.error ||  
            error.message ||               
            "An unknown Axios error occurred."
        );
    }

    if (error instanceof Error) return error.message;

    return String(error);
};
