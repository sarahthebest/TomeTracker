import Btn from "../../Atoms/Btn";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { Book } from "../book.types";
import axios from "axios";
import { getErrorMessage } from "../../../utils/globalUtils";

interface AddToShelfProps {
    book: Book;
}

const AddToShelf: React.FC<AddToShelfProps> = ({book}) => {
    const handleAddBook = async (status: string) => {
        console.log(1);
        try {
            const payload = {
                title: book.title,
                author: book.authors,
                status: status,
            };
            console.log(payload);
            await axios.post("http://localhost:5000/api/books/add", payload, {
                timeout: 10000,
            });

        } catch (error: unknown) {
            console.error("Error adding book:", getErrorMessage(error));
        }
    };

    const items: MenuProps["items"] = [
        {
            key: "1",
            label: "Want to read",
            onClick: () => handleAddBook("Want to read"),
        },
        {
            key: "2",
            label: "Reading",
            onClick: () => handleAddBook("Reading"),
        },
        {
            key: "3",
            label: "Completed",
            onClick: () => handleAddBook("Completed"),
        },
    ];

    return (
        <Dropdown className="h-fit w-fit" menu={{ items }} trigger={["hover"]}>
            <div>
                <Btn text="Add to shelf" onClick={(e) => e.preventDefault()} />
            </div>
        </Dropdown>
    );
};

export default AddToShelf;
