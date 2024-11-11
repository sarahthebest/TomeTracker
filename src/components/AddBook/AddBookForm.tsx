import { useState } from "react";
import InputField from "../Atoms/InputField";
import CheckboxField from "../Atoms/Checkbox"; 
import Dropdown from "../Atoms/Dropdown";

const AddBookForm = () => {
  const [book_author, set_book_author] = useState("");
  const [book_genre, set_book_genre] = useState<string[]>([]);
  const [book_title, set_book_title] = useState("");
  const [book_status, set_book_status] = useState("");

  const input_fields = [
    { label: "Title", type: "text", id: "book_title", value: book_title, setter: set_book_title },
    { label: "Author", type: "text", id: "book_author", value: book_author, setter: set_book_author },
  ];

  return (
    <form action="submit" className="flex flex-col justify-center gap-4">
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

      <CheckboxField
        label="Genre"
        id="book-genre"
        value={book_genre} 
        onChange={set_book_genre} 
      />

      <Dropdown
        book_status={book_status}
        set_book_status={set_book_status} 
      />
    </form>
  );
};

export default AddBookForm;
