import { create } from "zustand";
import axios from "axios";
import { getBooksByUser } from "../hooks/custom_hooks";
import { getErrorMessage } from "../utils/globalUtils";
import { Book, BookStatus } from "../components/Books/book.types";

interface BookStoreState {
    books: Book[];
    fetchBooks: () => Promise<void>;
    updateBookStatus: (bookId: string, newStatus: BookStatus) => Promise<void>;
    deleteBook: (bookId: string) => Promise<void>;
}
export const useBookStore = create<BookStoreState>((set) => ({
    books: [],

    fetchBooks: async () => {
        try {
            const fetchedBooks = await getBooksByUser();
            set({ books: fetchedBooks });
        } catch (error) {
            console.error("Error fetching books:", getErrorMessage(error));
        }
    },

    updateBookStatus: async (bookId, newStatus) => {
        try {
            await axios.patch(
                `http://localhost:5000/api/books/editBook/${bookId}`,
                { bookId, status: newStatus },
                { withCredentials: true }
            );

            set((state) => ({
                books: state.books.map((book) =>
                    book._id === bookId ? { ...book, status: newStatus } : book
                ),
            }));
        } catch (error) {
            console.error(
                "Error updating book status:",
                getErrorMessage(error)
            );
        }
    },

    deleteBook: async (bookId) => {
        try {
            await axios.delete(
                `http://localhost:5000/api/books/deleteBook/${bookId}`,
                {
                    withCredentials: true,
                }
            );
            setTimeout(() => {
                set((state) => ({
                    books: state.books.filter((book) => book._id !== bookId),
                }));
            }, 1000)
        } catch (error) {
            console.error("Error deleting book:", getErrorMessage(error));
        }
    },
}));
