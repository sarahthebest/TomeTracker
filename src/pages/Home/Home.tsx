import { useNavigate } from "react-router-dom";
import { getBooks } from "../../hooks/custom_hooks";
import BookShelf from "../../components/Books/Shelves/BookShelf";
import "./Home.css";
import { useEffect, useState } from "react";
import AddBook from "../../components/AddBook/AddBook";
import Logo from "../../components/Logo/Logo";
import CookieConsent from "../../components/Cookies/CookieConsent";
import Btn from "../../components/Atoms/Btn";

const Home = () => {
    const [books, setBooks] = useState<unknown[]>([]);
    const navigate = useNavigate(); 

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

    const handleNavigate = (path: string) => {
        navigate(path);
    };

    return (
        <div className="home_wrapper flex flex-col relative">
            <div className="btn_actions flex flex-row w-full justify-between sticky top-0 p-4">
                <Logo />
                <div className="user_handler flex flex-row gap-2">
                    <AddBook />
                    <Btn id={"login_btn"} onClick={() => handleNavigate("/login")} text="Login" backgroundColor="var(--accent)"/>
                    <Btn id={"register_btn"} onClick={() => handleNavigate("/register")} text="Register" backgroundColor="var(--accent)"/>
                </div>
            </div>
            <BookShelf books={books} />
            <CookieConsent />
        </div>
    );
};

export default Home;
