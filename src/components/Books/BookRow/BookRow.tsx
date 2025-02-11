import { Book } from "../book.types";
import { Link } from "react-router-dom";
import "./BookRow.css";
import BookStatusDropdown from "../../Atoms/Dropdown";
import { FaStar } from "react-icons/fa";
import { message } from "antd";
import { truncateText } from "../../../hooks/custom_hooks";
import { useBookStore } from "../../../stores/useBookStore";
import { useEffect, useState } from "react";
import Btn from "../../Atoms/Btn";
import { MdOutlineAdd } from "react-icons/md";
import DeleteBookBtn from "../DeleteBookBtn/DeleteBookBtn";

interface BookRowProps {
    book: Book;
}

const BookRow = ({ book }: BookRowProps) => {
    const [messageApi, contextHolder] = message.useMessage();
    const updateBookStatus = useBookStore((state) => state.updateBookStatus);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [bookTitle, setBookTitle] = useState(book.title);
    const fetchBooks = useBookStore(state => state.fetchBooks);


    const bookStatus = book.status || "Want to read";

    const thumbnailUrl = book.imageLinks?.thumbnail || null;
    const year = parseInt(book.publishedDate);

    const generateSlug = (bookName: string) => {
        return bookName
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");
    };

    const handleStatusChange = async (
        newStatus: "Reading" | "Completed" | "Want to read"
    ) => {
        if (bookStatus !== newStatus) {
            try {
                await updateBookStatus(book._id, newStatus);
                setTimeout(() => {
                    fetchBooks();
                }, 1500);
                messageApi.success("Book status set to " + newStatus);
            } catch (error) {
                console.error("Error updating book status:", error);
                messageApi.error("Error");
            }
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth < 1200) {
                setBookTitle(truncateText(book.title, 17));
            } else {
                setBookTitle(book.title);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [book.title]);

    return (
        <div className="bookRow flex md:flex-row flex-col w-full border-t border-border pt-2 text-white/90 justify-between">
            {contextHolder}
            <div className="flex gap-6 me-2 flex-shrink-0">
                <Link to={`/book/${generateSlug(book.title)}`} state={{ book }}>
                    {thumbnailUrl ? (
                        <img
                            src={thumbnailUrl}
                            alt={`${book.title} cover`}
                            className="h-52 w-32 hover:scale-105 duration-200 flex-shrink-0"
                        />
                    ) : (
                        <p>No image available</p>
                    )}
                </Link>
                <div className="bookDetails flex flex-col justify-between">
                    <div className="bookHeader">
                        <h3 className="text-xl heading text-wrap">
                            {bookTitle}
                        </h3>
                        <p>{book.authors}</p>
                    </div>
                    <div className="lg:flex gap-2 hidden">
                        {[
                            year,
                            `${book.pageCount} pages`,
                            book.averageRating === 0 ? (
                                "No Ratings"
                            ) : (
                                <div className="flex gap-1 items-center">
                                    {book.averageRating}{" "}
                                    <FaStar color="#facc15" />
                                </div>
                            ),
                            book.categories,
                        ]
                            .filter(Boolean)
                            .map((detail, index, arr) => (
                                <span key={index} className="flex items-center">
                                    {detail}
                                    {index < arr.length - 1 && (
                                        <span className="mx-1">•</span>
                                    )}
                                </span>
                            ))}
                    </div>
                </div>
            </div>
            <div className="bookActions mt-2 md:mt-0 flex md:flex-col justify-between">
                <BookStatusDropdown
                    book_status={bookStatus}
                    set_book_status={handleStatusChange}
                    disabled={true}
                />
                <div className="secondary place-self-end flex gap-4">
                    <DeleteBookBtn bookId={book._id} />
                    <Btn
                        icon={<MdOutlineAdd />}
                        className="w-fit place-self-end"
                    />
                </div>
            </div>
        </div>
    );
};

export default BookRow;
