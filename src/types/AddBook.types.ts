export type AddBookFormProps = {
    book_author: string;
    set_book_author: React.Dispatch<React.SetStateAction<string>>;
    book_genre: string[];
    set_book_genre: React.Dispatch<React.SetStateAction<string[]>>;
    book_title: string;
    set_book_title: React.Dispatch<React.SetStateAction<string>>;
    book_status: string;
    set_book_status: React.Dispatch<React.SetStateAction<string>>;
};