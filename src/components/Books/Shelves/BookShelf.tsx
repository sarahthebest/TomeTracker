import { Book } from "../../../types/Book";
import BookList from "../BookList/BookList";
import "./BookShelf.css";
type BookShelfProps = {
    books: Book[];
};

const BookShelf = ({ books }: BookShelfProps) => {
    const shelves = ["Want to read", "Reading", "Completed"];

    return (
        <div className="shelf_wrapper h-full w-full p-4 flex flex-col gap-20">
            {shelves.map((shelf, index) => (
                <div key={index} className="shelf">
                    <h2 className="text-md">{shelf}</h2>
                    <BookList
                        books={books.filter((book) => book.status === shelf)}
                    />
                </div>
            ))}
        </div>
    );
};

export default BookShelf;
