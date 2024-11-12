import { Book } from "../../types/Book";
import BookCard from "../BookCard/BookCard";

interface BookListProps {
  books: Book[];
}

const BookList = ({ books }: BookListProps) => {
  return (
    <div className="books_list flex flex-row flex-wrap gap-4 my-4 h-full">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
