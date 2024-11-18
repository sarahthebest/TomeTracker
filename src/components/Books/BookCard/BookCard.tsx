import { Book } from "../../../types/Book";
import { Link } from "react-router-dom";
import "./BookCard.css";

interface BookCardProps {
    book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
    const thumbnailUrl = book.imageLinks ? book.imageLinks.thumbnail : null;

    return (
        <div className="book_card">
            <Link to={"/book"}>
                {thumbnailUrl ? (
                    <img
                        src={thumbnailUrl}
                        alt={`${book.title} cover`}
                        className="book-thumbnail w-full h-full shadow-xl hover:scale-110 duration-200"
                    />
                ) : (
                    <p>No image available</p>
                )}
            </Link>
        </div>
    );
};

export default BookCard;
