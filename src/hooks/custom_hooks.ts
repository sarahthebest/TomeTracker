import axios from "axios";
import { getErrorMessage } from "../utils/globalUtils";
import { useState } from "react";

export const getBooks = async () => {
    try {
        const response = await axios.get(
            "http://localhost:5000/api/books/getBooks",
            {
                timeout: 10000,
            }
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error fetching books:", getErrorMessage(error));
        } else {
            console.error("Unexpected error:", getErrorMessage(error));
        }
        throw error;
    }
};

export const getBooksByUser = async () => {
    try {
        const response = await axios.get(
            "http://localhost:5000/api/books/getBooksByUser",
            {
                withCredentials: true,
                timeout: 10000,
            }
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error fetching books:", getErrorMessage(error));
        } else {
            console.error("Unexpected error:", getErrorMessage(error));
        }
        throw error;
    }
};

export const cookie_consent = async (consent: string) => {
    try {
        const res = await axios.post(
            "http://localhost:5000/api/auth/set_consent",
            { consent },
            { timeout: 10000 }
        );
        return res.data;
    } catch (error) {
        console.error("Failed to set consent:", getErrorMessage(error));
        throw error;
    }
};

export const truncateText = (text: string, length: number) => {
    return text && text.length > length
        ? text.substring(0, length) + "..."
        : text;
};

export const useAddBook = () => {
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const addBook = async (title: string, author: string, status: string) => {
        try {
            const payload = {
                title,
                author,
                status,
            };
            await axios.post("http://localhost:5000/api/books/add", payload, {
                withCredentials: true,
                timeout: 10000,
            });
            setSuccess("Book added!");
            setTimeout(() => {
                setSuccess(null);
            }, 3000);
            setError(null);
        } catch (error: unknown) {
            console.error("Error adding book:", getErrorMessage(error));
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
        addBook,
    };
};

export const UseSearchBooks = () => {
    const [error, setError] = useState<string | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [searchResults, setSearchResults] = useState<any[]>([]);


    const searchBooks = async (
        searchTerm: string,
        searchCategory: string,
        rating: number,
        pageRange: string[],
        genres: string[]
    ) => {
        if (!searchTerm.trim()) {
            setError("Search term is required!");
            return;
        }

        try {
            const filterParams = new URLSearchParams();
            filterParams.append("searchTerm", searchTerm);

            if (searchCategory) {
                filterParams.append("searchCategory", searchCategory);
            }
            if (genres.length > 0) {
                filterParams.append("genres", genres.join(","));
            }
            if (pageRange.length > 0) {
                filterParams.append("pageRange", pageRange.join(","));
            }
            if (rating) {
                filterParams.append("rating", rating.toString());
            }

            const { data } = await axios.get(
                `http://localhost:5000/api/books/search`,
                {
                    params: filterParams,
                }
            );
            setSearchResults(data)
            setError(null);
        } catch (error) {
            console.error("Error fetching search results:", getErrorMessage(error));
            setError("Failed to fetch search results. Please try again.");
        }
    };

    return { searchBooks, error, searchResults };
};
