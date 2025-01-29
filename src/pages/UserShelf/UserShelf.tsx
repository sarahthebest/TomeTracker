import { useEffect, useState } from "react";
import BookShelf from "../../components/Books/Shelves/BookShelf";
import CookieConsent from "../../components/Cookies/CookieConsent";
import Navbar from "../../components/Navbar/Navbar";
import { getBooksByUser } from "../../hooks/custom_hooks";
import AddBook from "../../components/Books/AddBook/AddBook";
import Bg from "../../components/Common/Bg";
import { getErrorMessage } from "../../utils/globalUtils";
import { Book } from "../../components/Books/book.types";

const UserShelf = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const fetchedBooks = await getBooksByUser();
                setBooks(fetchedBooks);
            } catch (error) {
                console.error("Error fetching books:", getErrorMessage(error));
            }
        };

        fetchBooks();
    }, []);

    const refreshBooks = async () => {
        try {
            const fetchedBooks = await getBooksByUser();
            setBooks(fetchedBooks);
        } catch (error) {
            console.error("Error refreshing books:", getErrorMessage(error));
        }
    };

    return (
        <section className="shelvesWrapper flex flex-col relative pb-20 min-h-screen">
            <Navbar />
            <Bg />
            <div className="shelfHeader flex gap-10 place-items-center mx-auto mt-20 z-30">
            <h2 className="text-4xl heading">Your Books</h2>
            <AddBook refreshBooks={refreshBooks}/>
            </div>
            <BookShelf books={books}/>
            <CookieConsent />
        </section>
    );
};

export default UserShelf;
