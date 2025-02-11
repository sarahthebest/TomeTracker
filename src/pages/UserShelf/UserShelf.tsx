import BookShelf from "../../components/Books/Shelves/BookShelf";
import CookieConsent from "../../components/Cookies/CookieConsent";
import Navbar from "../../components/Navbar/Navbar";
import AddBook from "../../components/Books/AddBook/AddBook";
import Bg from "../../components/Common/Bg";
import CreateBookList from "../../components/Books/BookList/CreateBookList";
import { useBookStore } from "../../stores/useBookStore";

const UserShelf = () => {
    const books = useBookStore((state) => state.books);

    return (
        <section className="shelvesWrapper flex flex-col relative pb-20 min-h-screen">
            <Navbar />
            <Bg />
            <div className="shelfHeader flex place-items-center px-4 md:px-0 w-full sm:w-2/3 mt-20 z-30 mx-auto justify-between">
                <h2 className="text-4xl heading">Your Shelves</h2>
                <div className="btnControls flex gap-4 place-items-center">
                    <AddBook />
                    <CreateBookList />
                </div>
            </div>
            <BookShelf books={books} />
            <CookieConsent />
        </section>
    );
};

export default UserShelf;
