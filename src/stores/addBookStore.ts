import { create } from "zustand";

type AddBookState = {
  isDialogOpen: boolean;
  error: string | null;
  book_author: string;
  book_title: string;
  book_status: "Reading" | "Completed" | "Want to read";
  openDialog: () => void;
  closeDialog: () => void;
  setBookAuthor: (author: string) => void;
  setBookTitle: (title: string) => void;
  setBookStatus: (status: "Reading" | "Completed" | "Want to read") => void;
  setError: (error: string | null) => void;
  resetForm: () => void;
};

export const addBookStore = create<AddBookState>((set) => ({
  isDialogOpen: false,
  error: null,
  book_author: "",
  book_title: "",
  book_status: "Want to read",
  openDialog: () => set({ isDialogOpen: true, error: null }),
  closeDialog: () => set({ isDialogOpen: false }),
  setBookAuthor: (author) => set({ book_author: author }),
  setBookTitle: (title) => set({ book_title: title }),
  setBookStatus: (status) => set({ book_status: status }),
  setError: (error) => set({ error }),
  resetForm: () =>
    set({
      book_author: "",
      book_title: "",
      book_status: "Want to read",
      error: null,
    }),
}));
