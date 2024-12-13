import { useLocation } from "react-router-dom";

const BookPage = () => {
    const location = useLocation();
    const book = location.state?.book;
    const thumbnailUrl = book.imageLinks?.thumbnail || null;


    return ( 
        <div className="page">
            <h1>{book.title}</h1>
            <img src={thumbnailUrl} alt="" />
        </div>
     );
}
 
export default BookPage;