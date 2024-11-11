import InputField from "../Atoms/InputField";
import Checkbox from "../Atoms/Checkbox";
import Dropdown from "../Atoms/Dropdown";

const AddBookForm = () => {
    const input_fields = [
        { label: "Title", type: "text", id: "book_title" },
        { label: "Author", type: "text", id: "book_author" },
    ];
    return (
        <form action="submit" className="flex flex-col justify-center gap-4">
            {input_fields.map((field, index) => (
                <InputField
                    key={index}
                    label={field.label}
                    type={field.type}
                    id={field.id}
                />
            ))}
            <Checkbox label="Genre" id="book-genre" />
            <Dropdown />
        </form>
    );
};

export default AddBookForm;
