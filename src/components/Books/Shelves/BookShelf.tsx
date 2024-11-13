import { Book } from "../../../types/Book";
import BookList from "../BookList/BookList";
import "./BookShelf.css";
type BookShelfProps = {
    books: Book[];
};

const BookShelf = ({ books }: BookShelfProps) => {
    const shelves = ["Want to read", "Reading", "Completed"];

    return (
        <div className="shelf_wrapper h-full w-full flex flex-col gap-8 mt-4">
            {shelves.map((shelf, index) => (
                <div key={index} className="shelf flex flex-row">
                        <h2 className="text-md shelf_label ps-5">{shelf}</h2>
                    <div className="shelf_content ms-4 w-full">
                        <BookList
                            books={books.filter(
                                (book) => book.status === shelf
                            )}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookShelf;
