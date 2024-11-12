import { Book } from "../../types/Book";
import "./BookCard.css"

interface BookCardProps {
    book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
    return (
        <div className="book-card bg-red-500 h-full w-1/6 p-2 container-col">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.status}</p>
            <ul className="flex flex-row gap-2 flex-wrap">
                {book.genre.map((genre, index) => (
                    <li className="tag rounded-full shadow bg-rose-300" key={index}>{genre}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookCard;
