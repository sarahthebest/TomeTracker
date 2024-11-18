import { useState } from "react";
import Btn from "../../Atoms/Btn";

const BookModal = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => {
        setIsDialogOpen(true);
    };
    const closeDialog = () => setIsDialogOpen(false);
    return (
        <>
            <Btn
                text="Add book!"
                id="modal"
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
                </dialog>
            )}
        </>
    );
};

export default BookModal;
