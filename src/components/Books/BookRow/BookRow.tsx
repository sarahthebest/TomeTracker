import { Book } from "../book.types";
import { Link } from "react-router-dom";
import "./BookRow.css";
import BookStatusDropdown from "../../Atoms/Dropdown";
import { FaStar } from "react-icons/fa";
import { message } from "antd";
import { useBookStore } from "../../../stores/useBookStore";

interface BookRowProps {
    book: Book;
    refreshBooks: () => void;
}

const BookRow = ({ book, refreshBooks }: BookRowProps) => {
    const [messageApi, contextHolder] = message.useMessage();
    const updateBookStatus = useBookStore((state) => state.updateBookStatus);

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
                    refreshBooks();
                }, 1500)
                messageApi.success("Book status set to " + newStatus);
            } catch (error) {
                console.error("Error updating book status:", error);
                messageApi.error("Error");
            }
        }
    };

    return (
        <div className="bookRow flex flex-row w-full border-b border-border pb-2 text-white/90 justify-between">
            {contextHolder}
            <div className="flex gap-6">
                <Link to={`/book/${generateSlug(book.title)}`} state={{ book }}>
                    {thumbnailUrl ? (
                        <img
                            src={thumbnailUrl}
                            alt={`${book.title} cover`}
                            className="h-full w-fit hover:scale-105 duration-200"
                        />
                    ) : (
                        <p>No image available</p>
                    )}
                </Link>
                <div className="bookDetails flex flex-col justify-between">
                    <div className="bookHeader">
                        <h3 className="text-2xl heading">{book.title}</h3>
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
            <BookStatusDropdown
                book_status={bookStatus}
                set_book_status={handleStatusChange}
            />
        </div>
    );
};

export default BookRow;
