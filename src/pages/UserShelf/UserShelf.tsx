import { useEffect, useState } from "react";
import BookShelf from "../../components/Books/Shelves/BookShelf";
import CookieConsent from "../../components/Cookies/CookieConsent";
import Navbar from "../../components/Navbar/Navbar";
import { getBooks } from "../../hooks/custom_hooks";
import "./UserShelf.css";
import AddBook from "../../components/AddBook/AddBook";
import Bg from "../../components/Common/Bg";

const UserShelf = () => {
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
        <section className="shelvesWrapper flex flex-col relative">
            <Navbar />
            <Bg />
            <div className="shelfHeader flex gap-10 place-items-center mx-auto mt-20 z-30" >
            <h2 className="text-2xl heading">Your Books</h2>
            <AddBook />
            </div>
            <BookShelf books={books} />
            <CookieConsent />
        </section>
    );
};

export default UserShelf;
