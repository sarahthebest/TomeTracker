import { Book } from "../../../types/Book";
import "./BookCard.css";
import { Link } from "react-router-dom";

interface BookCardProps {
    book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
    const thumbnailUrl = book.imageLinks ? book.imageLinks.thumbnail : null;

    return (
        <div className="book-card h-full w-fit">
            <Link to={"/book"}>
            {thumbnailUrl ? (
                <img
                    src={thumbnailUrl}
                    alt={`${book.title} cover`}
                    className="book-thumbnail object-fill shadow-xl"
                />
            ) : (
                <p>No image available</p>
            )}
            </Link>
        </div>
    );
};

export default BookCard;
