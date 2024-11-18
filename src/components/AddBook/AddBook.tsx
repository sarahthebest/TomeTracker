import { useState } from "react";
import axios from "axios";
import { Book } from "../../types/Book";
import Btn from "../Atoms/Btn";
import AddBookForm from "./AddBookForm";
import "./AddBook.css";
import { MdOutlineAdd } from "react-icons/md";

const AddBook = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [book_author, set_book_author] = useState("");
    const [book_title, set_book_title] = useState("");
    const [book_status, set_book_status] = useState<
        "Reading" | "Completed" | "Want to read"
    >("Want to read");

    const openDialog = () => {
        setError(null);
        setIsDialogOpen(true);
    };

    const closeDialog = () => setIsDialogOpen(false);

    const addBook = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newBook: Book = {
                id: new Date().toISOString(),
                title: book_title,
                authors: [book_author],
                status: book_status,
                startDate: new Date(),
                imageLinks: string,
                description: "",
            };

            await axios.post("http://localhost:5000/api/books/add", newBook, {
                timeout: 10000,
            });
            set_book_title("");
            set_book_author("");
            set_book_status("Want to read");
            setIsDialogOpen(false);
        } catch (error: unknown) {
            console.error("Error adding book:", error);
            setError(
                error instanceof Error
                    ? error.message
                    : "An unknown error occurred."
            );
        }
    };

    return (
        <>
            <Btn
                text="Add book"
                icon={<MdOutlineAdd size={20}/>}
                onClick={openDialog}
                backgroundColor="var(--primary)"
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
                            backgroundColor="var(--primary)"
                            id="close-btn"
                            text="Close"
                        />
                    </div>
                    <form onSubmit={addBook} className="flex gap-4 flex-col">
                        <AddBookForm
                            book_author={book_author}
                            set_book_author={set_book_author}
                            book_title={book_title}
                            set_book_title={set_book_title}
                            book_status={book_status}
                            set_book_status={set_book_status}
                        />
                        {error && <p className="error-text">{error}</p>}

                        <Btn
                            type="submit"
                            backgroundColor="var(--primary)"
                            id="submit-btn"
                            text="Add book"
                            onClick={function (): void {
                                throw new Error("Function not implemented.");
                            }}
                        />
                    </form>
                </dialog>
            )}
        </>
    );
};

export default AddBook;
