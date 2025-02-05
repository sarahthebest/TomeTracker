import axios from "axios";
import { useState } from "react";
import { getErrorMessage } from "../utils/globalUtils";

export const useCreateList = () => {
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const createList = async (listName: string, description: string) => {
        const payload = {
            listName,
            description,
        };
        try {
            await axios.post("http://localhost:5000/api/books/add", payload, {
                withCredentials: true,
                timeout: 10000,
            });
            setSuccess("List created");
            setTimeout(() => {
                setSuccess(null);
            }, 3000);
            setError(null);
        } catch (error: unknown) {
            console.log("Error creating list", getErrorMessage(error));
            setError(
                error instanceof Error
                    ? getErrorMessage(error)
                    : "An unknown error occurred."
            );
            setTimeout(() => {
                setError(null);
            }, 3000);
        }
    };
    return {
        success,
        error,
        createList,
    };
};
