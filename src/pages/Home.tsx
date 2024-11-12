import { getBooks } from "../hooks/custom_hooks";
import BookShelf from "../components/Shelves/BookShelf";
import "./Home.css";
import { useEffect, useState } from "react";
import AddBook from "../components/AddBook/AddBook";

const Home = () => {
    const [books, setBooks] = useState<unknown[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
          try {
            const fetchedBooks = await getBooks(); 
            setBooks(fetchedBooks); 
          } catch (error) {
            console.error("Error fetching books:", error);
          }
        };
    
        fetchBooks();
      }, []); 

    return (
        <div className="home_wrapper flex flex-col h-full relative overflow-visible">
            <AddBook />
            <BookShelf books={books}/>
        </div>
    );
};

export default Home;
