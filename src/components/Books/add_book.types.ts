import { BookStatus } from "../../types/global.types";

export interface AddBookFormProps {
    book_author: string;
    set_book_author: (author: string) => void;
    book_title: string;
    set_book_title: (title: string) => void;
    book_status: BookStatus;
    set_book_status: (status: BookStatus) => void;
}
