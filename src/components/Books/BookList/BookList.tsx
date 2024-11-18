import { Book } from "../../../types/Book";
import BookRow from "../BookCard/BookRow";

interface BookListProps {
  books: Book[];
}

const BookList = ({ books }: BookListProps) => {
  return (
    <div className="books_list flex flex-row flex-wrap gap-4 my-4 h-full p-4">
      {books.map((book) => (
        <BookRow key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
