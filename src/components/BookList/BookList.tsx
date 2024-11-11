import { SavedBooks } from "../../hooks/custom_hooks";
import BookCard from "../BookCard/BookCard";

const BookList = () => {
    const [books, set_books]= SavedBooks();
    return ( 
        <div className="books_list flex flex-row">
            <BookCard books={books}/>
        </div>
     );
}
 
export default BookList;