import { useState, useEffect } from "react";
import { Book } from "../types/Book";

const BOOKS_KEY = "books";

export const SavedBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const storedBooks = localStorage.getItem(BOOKS_KEY);
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
  }, [books]);

  return [books, setBooks] as const;
};