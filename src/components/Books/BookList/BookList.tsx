import { Book } from "../../../types/Book";
import BookRow from "../BookCard/BookRow";

interface BookListProps {
    books: Book[];
}

const BookList = ({ books }: BookListProps) => {
    return (
        <div className="books_list flex flex-row flex-wrap h-full w-full ps-4">
            <table className="book-table w-full text-left border-collapse table-auto pe-4">
                <thead className="w-full">
                    <tr>
                        <th className="p-2">Cover</th>
                        <th className="p-2">Title</th>
                        <th className="p-2">Author</th>
                        <th className="p-2">Avg Rating</th>
                        <th className="p-2">Pages</th>
                        <th className="p-2">Description</th>
                    </tr>
                </thead>
                {books.map((book, index) => (
                    <BookRow key={index} book={book} />
                ))}
            </table>
        </div>
    );
};

export default BookList;
