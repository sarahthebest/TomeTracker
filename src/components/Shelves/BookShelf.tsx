import { Book } from "../../types/Book";
import BookList from "../BookList/BookList";
type BookShelfProps = {
    books: Book[];
};

const BookShelf = ({ books }: BookShelfProps) => {
    const shelves = ["Want to read", "Reading", "Completed"];

    console.log(books)

    const getBookCountByShelf = (shelf: string): number => {
        return books.filter((book) => book.status === shelf).length;
    };

    return (
        <div className="shelf_wrapper h-full bg-red-50 w-full">
            {shelves.map((shelf, index) => (
                <div key={index} className="shelf h-72">
                    <h2>{shelf}</h2>
                    <BookList />
                    <p>Books: {getBookCountByShelf(shelf)}</p>
                </div>
            ))}
        </div>
    );
};

export default BookShelf;
