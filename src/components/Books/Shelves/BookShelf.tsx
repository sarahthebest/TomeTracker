import { useState } from "react";
import { Book } from "../book.types";
import BookList from "../BookList/BookList";
import "./BookShelf.css";

type BookShelfProps = {
    books: Book[];
};

const BookShelf = ({ books }: BookShelfProps) => {
    const shelves = ["Want to read", "Reading", "Completed"];
    const [selectedShelf, setSelectedShelf] = useState<string>(shelves[0]);

    return (
        <div className="shelf_wrapper h-full w-2/3 mx-auto mt-16 z-10 flex flex-col mb-2">
            <div className="shelf_tabs flex ms-4 rounded-t-xl">
                {shelves.map((shelf, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedShelf(shelf)}
                        className={`tab_button pb-4 p-2 rounded-t-xl text-lg text-white/90 ${
                            selectedShelf === shelf ? "active" : " bg-gray-400 text-white/50"
                        }`}
                    >
                        {shelf}
                    </button>
                ))}
            </div>
            <div className="shelf_content w-full ms-4 pb-4 pe-4 rounded-r rounded-b">
                <BookList
                    books={books.filter(
                        (book) => book.status === selectedShelf
                    )}
                />
            </div>
        </div>
    );
};

export default BookShelf;
