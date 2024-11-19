import { Book } from "../../../types/Book";
import { Link } from "react-router-dom";
import "./BookRow.css";

interface BookRowProps {
    book: Book;
}

const BookRow = ({ book }: BookRowProps) => {
    const thumbnailUrl = book.imageLinks?.thumbnail || null;
    const year = parseInt(book.publishedDate);

    return (
        <div className="bookRow flex flex-row gap-6 w-full border-b border-border pb-2 text-white/90">
            <Link to={`/book/${book.id}`}>
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
                    <h3 className="text-2xl font-serif">{book.title}</h3>
                    <p>{book.authors}</p>
                </div>
                <div className="flex gap-2">
                    {[year, `${book.pageCount} pages`, `${book.averageRating} rating`, book.categories]
                        .filter(Boolean)
                        .map((detail, index, arr) => (
                            <span key={index}>
                                {detail}
                                {index < arr.length - 1 && <span className="mx-1">•</span>}
                            </span>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default BookRow;