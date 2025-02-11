import { useState } from "react";
import { Book } from "../book.types";
import "./BookShelf.css";
import { Space } from "antd";
import BookRow from "../BookRow/BookRow";

type BookShelfProps = {
    books: Book[];
};

const BookShelf = ({ books }: BookShelfProps) => {
    const shelves = ["Want to read", "Reading", "Completed"];

    const [selectedShelf, setSelectedShelf] = useState<string>(shelves[0]);

    const filteredBooks = books.filter((book) => book.status === selectedShelf);

    return (
        <div className="shelf_wrapper h-full w-full md:w-2/3 mx-auto mt-10 z-10 flex flex-col mb-2 px-4 md:px-0">
            <Space className="shelf_tabs flex mb-10 gap-4">
                {shelves.map((shelf, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedShelf(shelf)}
                        className={`tab_button text-base shadow-lg bg-bg px-3 py-1 rounded-full text-white/90 transition duration-300 ease-in-out transform ${
                            selectedShelf === shelf ? "active" : ""
                        }`}
                    >
                        {shelf}
                    </button>
                ))}
            </Space>
            <div className="shelf_content w-full">
                {filteredBooks.length > 0 ? (
                    <div className="books_list flex flex-row flex-wrap gap-4 h-full">
                        {filteredBooks.map((book, index) => (
                            <BookRow
                                key={index}
                                book={book}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-2xl">This shelf is empty.</p>
                )}
            </div>
        </div>
    );
};

export default BookShelf;
