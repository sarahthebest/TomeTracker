import React, { useState } from "react";
import Btn from "../Atoms/Btn";
import AddBookForm from "./AddBookForm";
import { MdOutlineAdd } from "react-icons/md";
import { addBookStore } from "../../stores/addBookStore";
import { Modal } from "antd";
import { useAddBook } from "../../hooks/custom_hooks";

const AddBook = () => {
    const {
        isDialogOpen,
        book_author,
        book_title,
        book_status,
        openDialog,
        closeDialog,
        setBookAuthor,
        setBookTitle,
        setBookStatus,
        resetForm,
    } = addBookStore();
    const [success, setSuccess] = useState<string | null>(null);

    const { error, addBook } = useAddBook();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await addBook(book_title, book_author, book_status);

        setSuccess("Book added successfully!");

        setTimeout(() => {
            setSuccess(null);
            resetForm();
            closeDialog();
        }, 1000);
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

            <Modal
                title="Add a new book"
                className="medium text-bg"
                style={{ color: "black" }}
                open={isDialogOpen}
                onCancel={closeDialog}
                footer={null}
                destroyOnClose={true}
            >
                <form onSubmit={handleSubmit} className="flex gap-4 flex-col">
                    <AddBookForm
                        book_author={book_author}
                        set_book_author={setBookAuthor}
                        book_title={book_title}
                        set_book_title={setBookTitle}
                        book_status={book_status}
                        set_book_status={setBookStatus}
                    />
                    {error && <p className="text-red-600">{error}</p>}
                    {success && <p className="text-green-600">{success}</p>}
                    <Btn
                        type="submit"
                        backgroundColor="var(--primary)"
                        text="Add book"
                    />
                </form>
            </Modal>
        </>
    );
};

export default AddBook;
