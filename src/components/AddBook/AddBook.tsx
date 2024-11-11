import { useState } from "react";
import { SavedBooks } from "../../hooks/custom_hooks.js";
import { Book } from "../../types/Book";
import Btn from "../Atoms/Btn";
import AddBookForm from "./AddBookForm";
import "./AddBook.css";

const AddBook = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [books, setBooks] = SavedBooks();
    const [book_author, set_book_author] = useState("");
    const [book_genre, set_book_genre] = useState<string[]>([]);
    const [book_title, set_book_title] = useState("");
    const [book_status, set_book_status] = useState<
        "Reading" | "Completed" | "Want to read"
    >("Want to read");
    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    const addBook = () => {
        const newBook: Book = {
            id: new Date().toISOString(),
            title: book_title,
            author: book_author,
            genre: book_genre,
            status: book_status,
            startDate: new Date(),
            set_book_status: function (): void {
                throw new Error("Function not implemented.");
            },
        };

        setBooks((prevBooks) => [...prevBooks, newBook]);
        console.log(books)
        set_book_title("");
        set_book_author("");
        set_book_genre([]);
        set_book_status("Want to read");
        setIsDialogOpen(false);
    };

    return (
        <>
            <Btn
                text="Add book!"
                id="modal"
                onClick={openDialog}
                backgroundColor="lightBlue"
            />

            {isDialogOpen && (
                <dialog className="flex flex-col gap-4 rounded shadow p-4">
                    <div className="dialog_header flex flex-row justify-between">
                        <h2 className="text-xl" id="addBookTitle">
                            Add a new book
                        </h2>
                        <Btn
                            onClick={closeDialog}
                            backgroundColor="pink"
                            id="close-btn"
                            text={"Close"}
                        />
                    </div>
                    <form action="submit" className="flex gap-4 flex-col">
                        <AddBookForm
                            book_author={book_author}
                            set_book_author={set_book_author}
                            book_genre={book_genre}
                            set_book_genre={set_book_genre}
                            book_title={book_title}
                            set_book_title={set_book_title}
                            book_status={book_status}
                            set_book_status={set_book_status}
                        />
                        <Btn
                            onClick={addBook}
                            backgroundColor="lightGreen"
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
