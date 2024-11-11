import { useState } from "react";
import Btn from "../Atoms/Btn";
import AddBookForm from "./AddBookForm";
import "./AddBook.css";

const AddBook = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

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
                        <AddBookForm />
                        <Btn
                            onClick={closeDialog}
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
