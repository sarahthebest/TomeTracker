import InputField from "../Atoms/InputField";
import Checkbox from "../Atoms/Checkbox";

const AddBookForm = () => {
    const input_fields = [
        { label: "Book Title", type: "text", id: "book_title" },
        { label: "Book Author", type: "text", id: "book_author" },
    ];
    return (
        <form action="">
            <InputField label="Book Title" type="text" id="book-title" />
            {input_fields.map((field, index) => (
                <InputField
                    key={index}
                    label={field.label}
                    type={field.type}
                    id={field.id}
                />
            ))}
            <Checkbox label="Book Genre" id="book-genre" />
        </form>
    );
};

export default AddBookForm;
