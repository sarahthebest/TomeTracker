import { getBooks } from "../../hooks/custom_hooks";
import BookShelf from "../../components/Books/Shelves/BookShelf";
import "./Home.css";
import { useEffect, useState } from "react";
import AddBook from "../../components/AddBook/AddBook";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Logo from "../../components/Logo/Logo";
import CookieConsent from "../../components/Cookies/CookieConsent";

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
        <div className="home_wrapper flex flex-col relative">
            <div className="btn_actions flex flex-row w-full justify-between sticky top-0 p-4">
                <Logo />
                <div className="user_handler flex flex-row gap-2">
                    <AddBook />
                    <Login />
                    <Register />
                </div>
            </div>
            <BookShelf books={books} />
            <CookieConsent />
        </div>
    );
};

export default Home;
