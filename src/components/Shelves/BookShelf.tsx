import { Book } from "../../types/Book";
import BookList from "../BookList/BookList";
type BookShelfProps = {
    books: Book[];
};

const BookShelf = ({ books }: BookShelfProps) => {
    const shelves = ["Want to read", "Reading", "Completed"];

    const getBookCountByShelf = (shelf: string): number => {
        return books.filter((book) => book.status === shelf).length;
    };

    return (
        <div className="shelf_wrapper h-full bg-red-50 w-full p-4 flex flex-col gap-20">
            {shelves.map((shelf, index) => (
                <div key={index} className="shelf h-80">
                    <h2>{shelf}</h2>
                    <BookList
                        books={books.filter((book) => book.status === shelf)}
                    />
                    <p>Books: {getBookCountByShelf(shelf)}</p>
                </div>
            ))}
        </div>
    );
};

export default BookShelf;
