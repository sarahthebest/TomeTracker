import { useState } from "react";
import { Book } from "../../../types/Book";
import BookList from "../BookList/BookList";
import "./BookShelf.css";

type BookShelfProps = {
    books: Book[];
};

const BookShelf = ({ books }: BookShelfProps) => {
    const shelves = ["Want to read", "Reading", "Completed"];
    const [selectedShelf, setSelectedShelf] = useState<string>(shelves[0]);

    return (
        <div className="shelf_wrapper h-full w-full flex flex-col gap-8 mt-4">
            <div className="shelf_tabs flex gap-8 ms-4">
                {shelves.map((shelf, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedShelf(shelf)}
                        className={`tab_button ${
                            selectedShelf === shelf ? "active text-2xl" : ""
                        }`}
                    >
                        {shelf}
                    </button>
                ))}
            </div>

            <div className="shelf_content w-full">
                <BookList
                    books={books.filter((book) => book.status === selectedShelf)}
                />
            </div>
        </div>
    );
};

export default BookShelf;
