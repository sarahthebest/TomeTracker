import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Bg from "../../components/Common/Bg";
import CookieConsent from "../../components/Cookies/CookieConsent";
import { Tag, Flex } from "antd";
import BookStatusDropdown from "../../components/Atoms/Dropdown";
import { useState } from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";
import BookStoreLinks from "./BookStoreLinks";
import MoreBooksByAuthor from "./MoreBooksByAuthor";

const BookPage = () => {
    const location = useLocation();
    const book = location.state?.book;
    const [collapsedText, setCollapsedText] = useState(false);
    const [bookStatus, setBookStatus] = useState<
        "Reading" | "Completed" | "Want to read"
    >("Reading");

    if (!book) {
        return (
            <section className="page flex flex-col relative min-h-screen ">
                <Navbar />
                <Bg />
                <CookieConsent />
                <div className="text-center mt-20">
                    <h1>Book Not Found</h1>
                    <Link to="/shelves">Return to bookshelf</Link>
                </div>
            </section>
        );
    }

    const limitCharacters = (str: string, limit: number): string => {
        return str.length > limit ? `${str.slice(0, limit)}...` : str;
    };

    const handleStatusChange = (
        status: "Reading" | "Completed" | "Want to read"
    ) => {
        setBookStatus(status);
    };

    const thumbnailUrl = book?.imageLinks?.thumbnail || "default-thumbnail.png";

    return (
        <section className="page flex flex-col relative min-h-screen">
            <Navbar />
            <Bg />
            <CookieConsent />
            <div className="book_wrapper flex flex-col gap-4 relative z-10 mt-20 w-2/3 mx-auto">
                <Link
                    to="/shelves"
                    className="flex flex-row place-items-center gap-2"
                >
                    <IoReturnUpBackOutline size={20} /> Return
                </Link>
                <div className="book_info gap-8 flex ">
                    <img
                        src={thumbnailUrl}
                        alt={`Thumbnail for ${book.title}`}
                        className="w-fit"
                    />
                    <Flex vertical gap={8}>
                        <h1 className="heading text-4xl">{book.title}</h1>
                        <p>
                            Written by {""}
                            <span className="text-accent">
                                {book.authors?.join(", ") || "Unknown Author"}
                            </span>
                            <br />
                            Published {book.publishedDate || "Unknown Date"}
                            <br />
                            {book.pageCount || "N/A"} pages
                        </p>
                        <Tag color="magenta" className="w-fit">
                            {book.categories?.join(", ") || "Uncategorized"}
                        </Tag>
                    </Flex>
                    <BookStatusDropdown
                        book_status={bookStatus}
                        set_book_status={handleStatusChange}
                    />
                </div>
                {book.description ? (
                    <Flex vertical>
                        <p>
                            {collapsedText
                                ? book.description
                                : limitCharacters(book.description, 500)}
                        </p>
                        <button
                            className="hover:bg-pop/10 w-full py-1 rounded-xl mt-4"
                            onClick={() => setCollapsedText(!collapsedText)}
                        >
                            {collapsedText ? "Show Less" : "Read More"}
                        </button>
                    </Flex>
                ) : null}
                <Flex justify="space-between" vertical>
                    <BookStoreLinks book={book} />
                    <MoreBooksByAuthor book={book} />
                </Flex>
            </div>
        </section>
    );
};

export default BookPage;
