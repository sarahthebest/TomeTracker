import InputField from "../Atoms/InputField";
import Dropdown from "../Atoms/Dropdown";
import { AddBookFormProps } from "../Books/add_book.types";

const AddBookForm = ({
    book_author,
    set_book_author,
    book_title,
    set_book_title,
    book_status,
    set_book_status,
}: AddBookFormProps) => {
    const input_fields = [
        {
            label: "Title",
            type: "text",
            id: "book_title",
            value: book_title,
            setter: set_book_title,
        },
        {
            label: "Author",
            type: "text",
            id: "book_author",
            value: book_author,
            setter: set_book_author,
        },
    ];

    return (
        <div className="flex flex-col gap-4 my-4">
            {input_fields.map((field, index) => (
                <InputField
                    key={index}
                    label={field.label}
                    type={field.type}
                    id={field.id}
                    value={field.value}
                    onChange={(e) => field.setter(e.target.value)}
                />
            ))}
            <Dropdown
                book_status={book_status}
                set_book_status={set_book_status}
            />
        </div>
    );
};

export default AddBookForm;
