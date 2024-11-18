import { getBooks } from "../../hooks/custom_hooks";
import BookShelf from "../../components/Books/Shelves/BookShelf";
import "./Home.css";
import { useEffect, useState } from "react";
import CookieConsent from "../../components/Cookies/CookieConsent";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

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
    }, [books]);

    return (
        <div className="home_wrapper flex flex-col relative">
            <Navbar />
            <Header />
            <BookShelf books={books} />
            <CookieConsent />
        </div>
    );
};

export default Home;
