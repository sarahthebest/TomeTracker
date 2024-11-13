import { Book } from "../../../types/Book";
import "./BookRow.css";
import { Link } from "react-router-dom";
import { truncateText } from "../../../hooks/custom_hooks";

interface BookRowProps {
    book: Book;
}

const BookRow = ({ book }: BookRowProps) => {
    const thumbnailUrl = book.imageLinks ? book.imageLinks.thumbnail : null;
    const maxDescriptionLength = 400;
    

    return (
        <tbody>
            <tr>
                <td>
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
                </td>
                <td className="">{book.title}</td>
                <td className="">{book.authors}</td>
                <td className="">{book.averageRating || "N/A"}</td>
                <td className="">{book.pageCount || "N/A"}</td>
                <td className="book-description">
                    {truncateText(
                        book.description || "N/A",
                        maxDescriptionLength
                    )}
                </td>
            </tr>
        </tbody>
    );
};

export default BookRow;
