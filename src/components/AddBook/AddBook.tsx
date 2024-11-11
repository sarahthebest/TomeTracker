import Btn from "../Atoms/Btn";
import AddBookForm from "./AddBookForm";
import "./AddBook.css"

const AddBook = () => {
    const openDialog = () => {
        const dialog = document.getElementById("add_book") as HTMLDialogElement;
        if (dialog) {
            dialog.showModal();
        }
    };

    const closeDialog = () => {
        const dialog = document.getElementById("add_book") as HTMLDialogElement;
        if (dialog) {
            dialog.close();
        }
    };

    return (
        <>
            <Btn
                text="Add book to library!"
                id="modal"
                onClick={openDialog}
                backgroundColor="lightBlue"
            />

            <dialog id="add_book" aria-labelledby="addBookTitle" className="p-4 flex flex-col gap-4 rounded shadow">
                <h2 className="text-xl mx-auto" id="addBookTitle">Add a new book</h2>
                <form action="">
                    <AddBookForm />
                </form>
                    <Btn
                        onClick={closeDialog}
                        backgroundColor="pink"
                        text="Add book"
                        id="close-btn"
                    />
            </dialog>
        </>
    );
};

export default AddBook;
