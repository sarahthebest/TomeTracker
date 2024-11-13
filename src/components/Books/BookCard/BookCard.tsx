import { Book } from "../../../types/Book";
import "./BookCard.css";
import { Link } from "react-router-dom";

interface BookCardProps {
    book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
    const thumbnailUrl = book.imageLinks ? book.imageLinks.thumbnail : null;

    return (
        <div className="book_card hover:scale-110 duration-300">
            <Link to={"/book"}>
                {thumbnailUrl ? (
                    <img
                        src={thumbnailUrl}
                        alt={`${book.title} cover`}
                        className="book-thumbnail shadow-xl w-full h-full"
                    />
                ) : (
                    <>
                        <p>No image available</p>
                        <h3>{book.title}</h3>
                        <h3>{book.author}</h3>
                    </>
                )}
            </Link>
        </div>
    );
};

export default BookCard;
