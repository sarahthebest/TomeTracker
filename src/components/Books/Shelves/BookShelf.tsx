import { useState } from "react";
import { Book } from "../book.types";
import BookList from "../BookList/BookList";
import "./BookShelf.css";
import { Space } from "antd";

type BookShelfProps = {
    books: Book[];
};

const BookShelf = ({ books }: BookShelfProps) => {
    const shelves = ["Want to read", "Reading", "Completed"];
    const [selectedShelf, setSelectedShelf] = useState<string>(shelves[0]);

    return (
        <div className="shelf_wrapper h-full md:w-2/3 mx-auto mt-10 z-10 flex flex-col mb-2">
            <Space className="shelf_tabs flex mb-10 mx-auto md:mx-0 gap-4">
                {shelves.map((shelf, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedShelf(shelf)}
                        className={`tab_button shadow-lg bg-bg px-4 py-2 rounded-full text-white/90 transition duration-300 ease-in-out transform ${
                            selectedShelf === shelf
                                ? "active"
                                : ""
                        }`}
                    >
                        {shelf}
                    </button>
                ))}
            </Space>
            <div className="shelf_content w-full">
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
