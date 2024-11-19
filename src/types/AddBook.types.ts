export interface AddBookFormProps {
    book_author: string;
    set_book_author: (author: string) => void;
    book_title: string;
    set_book_title: (title: string) => void;
    book_status: "Reading" | "Completed" | "Want to read";
    set_book_status: (status: "Reading" | "Completed" | "Want to read") => void;
}
