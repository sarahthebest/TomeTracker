import axios from "axios";
import Btn from "../Atoms/Btn";
import AddBookForm from "./AddBookForm";
import "./AddBook.css";
import { MdOutlineAdd } from "react-icons/md";
import { addBookStore } from "../../stores/addBookStore";

const AddBook = () => {
    const {
        isDialogOpen,
        error,
        book_author,
        book_title,
        book_status,
        openDialog,
        closeDialog,
        setBookAuthor,
        setBookTitle,
        setBookStatus,
        setError,
        resetForm,
    } = addBookStore();

    const addBook = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const payload = {
                title: book_title, 
                author: book_author, 
                status: book_status, 
            };

            await axios.post("http://localhost:5000/api/books/add", payload, {
                timeout: 10000,
            });

            resetForm();
            closeDialog();
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
                icon={<MdOutlineAdd size={20} />}
                onClick={openDialog}
                backgroundColor="var(--primary)"
                position="sticky"
            />

            {isDialogOpen && (
                <dialog className="flex flex-col gap-4 rounded shadow p-4 mt-52">
                    <div className="dialog_header flex flex-row justify-between">
                        <h2 className="text-xl" id="addBookTitle">
                            Add a new book
                        </h2>
                        <Btn
                            onClick={closeDialog}
                            backgroundColor="var(--primary)"
                            text="Close"
                        />
                    </div>
                    <form onSubmit={addBook} className="flex gap-4 flex-col">
                        <AddBookForm
                            book_author={book_author}
                            set_book_author={setBookAuthor}
                            book_title={book_title}
                            set_book_title={setBookTitle}
                            book_status={book_status}
                            set_book_status={setBookStatus}
                        />
                        {error && <p className="error-text">{error}</p>}

                        <Btn
                            type="submit"
                            backgroundColor="var(--primary)"
                            text="Add book"
                        />
                    </form>
                </dialog>
            )}
        </>
    );
};

export default AddBook;
