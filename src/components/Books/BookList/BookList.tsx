import { Book } from "../../../types/Book";
import BookRow from "../BookRow/BookRow";

interface BookListProps {
  books: Book[];
}

const BookList = ({ books }: BookListProps) => {
  return (
    <div className="books_list flex flex-row flex-wrap gap-4 h-full p-4">
      {books.map((book, index) => (
        <BookRow key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;
