import { useEffect, useState } from "react";
import axios from "axios";
import { getBooks } from "../../hooks/custom_hooks.js";
import { Book } from "../../types/Book";
import Btn from "../Atoms/Btn";
import AddBookForm from "./AddBookForm";
import "./AddBook.css";

const AddBook = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [books, setBooks] = useState<Book[]>([]);
    const [book_author, set_book_author] = useState("");
    const [book_title, set_book_title] = useState("");
    const [book_status, set_book_status] = useState<
        "Reading" | "Completed" | "Want to read"
    >("Want to read");

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    const addBook = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            const newBook: Book = {
                id: new Date().toISOString(),
                title: book_title,
                author: book_author,
                status: book_status,
                startDate: new Date(),
            };

            const response = await axios.post(
                "http://localhost:5000/api/books/add",
                newBook,
                {
                    timeout: 10000,
                }
            );

            setBooks((prevBooks) => [...prevBooks, response.data.book]);

            set_book_title("");
            set_book_author("");
            set_book_status("Want to read");
            setIsDialogOpen(false);
        } catch (error) {
            console.error("Error adding book:", error);
        }
    };

    useEffect(() => {
        const fetchBooks = async () => {
          try {
            const fetchedBooks = await getBooks(); 
            setBooks(fetchedBooks);  
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchBooks();  
      }, []);

    return (
        <>
            <Btn
                text="Add book!"
                id="modal"
                onClick={openDialog}
                backgroundColor="var(--accent)" 
                position="sticky"
            />

            {isDialogOpen && (
                <dialog className="flex flex-col gap-4 rounded shadow p-4 mt-20">
                    <div className="dialog_header flex flex-row justify-between">
                        <h2 className="text-xl" id="addBookTitle">
                            Add a new book
                        </h2>
                        <Btn
                            onClick={closeDialog}
                            backgroundColor="var(--accent)" 
                            id="close-btn"
                            text={"Close"}
                        />
                    </div>
                    <form action="submit" className="flex gap-4 flex-col">
                        <AddBookForm
                            book_author={book_author}
                            set_book_author={set_book_author}
                            book_title={book_title}
                            set_book_title={set_book_title}
                            book_status={book_status}
                            set_book_status={set_book_status}
                        />
                        <Btn
                            onClick={addBook}
                            backgroundColor="var(--accent)" 
                            id="close-btn"
                            text={"Add book"}
                        />
                    </form>
                </dialog>
            )}
        </>
    );
};

export default AddBook;
