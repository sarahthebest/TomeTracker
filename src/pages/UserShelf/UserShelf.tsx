import { useEffect, useState } from "react";
import BookShelf from "../../components/Books/Shelves/BookShelf";
import CookieConsent from "../../components/Cookies/CookieConsent";
import Navbar from "../../components/Navbar/Navbar";
import { getBooksByUser } from "../../hooks/custom_hooks";
import AddBook from "../../components/Books/AddBook/AddBook";
import Bg from "../../components/Common/Bg";
import { getErrorMessage } from "../../utils/globalUtils";
import { Book } from "../../components/Books/book.types";
import CreateBookList from "../../components/Books/BookList/CreateBookList";

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
            <div className="shelfHeader flex place-items-center px-4 md:px-0 md:w-2/3 mt-20 z-30 mx-auto justify-between">
                <h2 className="text-4xl heading">Your Books</h2>
                <div className="btnControls flex gap-4 place-items-center">
                    <AddBook refreshBooks={refreshBooks} />
                    <CreateBookList />
                </div>
            </div>
            <BookShelf books={books} refreshBooks={refreshBooks} />
            <CookieConsent />
        </section>
    );
};

export default UserShelf;
