import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Bg from "../../components/Common/Bg";
import CookieConsent from "../../components/Cookies/CookieConsent";
import { Tag, Flex } from "antd";
import { useState } from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";
import BookStoreLinks from "./BookStoreLinks";
import MoreBooksByAuthor from "./MoreBooksByAuthor";
import AddToShelf from "../../components/Books/Shelves/AddToShelf";

const BookPage = () => {
    const location = useLocation();
    const book = location.state?.book;
    const [collapsedText, setCollapsedText] = useState(false);

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

    const thumbnailUrl = book?.imageLinks?.thumbnail || "default-thumbnail.png";

    return (
        <>
            <Bg />
            <section className="page overflow-hidden overflow-x-hidden flex flex-col relative min-h-screen">
                <Navbar />
                <CookieConsent />
                <div className="book_wrapper flex flex-col gap-4 relative px-4 md:px-0 z-10 mt-20 md:w-2/3 mx-auto">
                    <Link
                        to="/shelves"
                        className="flex flex-row place-items-center gap-2"
                    >
                        <IoReturnUpBackOutline size={20} /> Return
                    </Link>
                    <div className="book_info flex flex-col md:flex-row justify-between md:place-items-start">
                        <Flex className="md:gap-8 gap-2 mb-4 md:mb-0 flex-col md:flex-row md:place-items-center">
                            <img
                                src={thumbnailUrl}
                                alt={`Thumbnail for ${book.title}`}
                                className="w-fit"
                            />
                            <Flex vertical gap={8} className="md:text-start">
                                <h1 className="heading text-4xl">
                                    {book.title}
                                </h1>
                                <p>
                                    Written by {""}
                                    <span className="text-accent">
                                        {book.authors?.join(", ") ||
                                            "Unknown Author"}
                                    </span>
                                    <br />
                                    Published{" "}
                                    {book.publishedDate || "Unknown Date"}
                                    <br />
                                    {book.pageCount || "N/A"} pages
                                </p>
                                <Tag color="magenta" className="w-fit">
                                    {book.categories?.join(", ") ||
                                        "Uncategorized"}
                                </Tag>
                            </Flex>
                        </Flex>
                        <AddToShelf book={book} />
                    </div>
                    {book.description ? (
                        <Flex vertical>
                            <p>
                                {book.description.length > 500
                                    ? collapsedText
                                        ? book.description
                                        : limitCharacters(book.description, 500)
                                    : book.description}
                            </p>
                            {book.description.length > 500 && (
                                <button
                                    className="hover:bg-pop/10 w-full py-1 rounded-xl mt-4"
                                    onClick={() =>
                                        setCollapsedText(!collapsedText)
                                    }
                                >
                                    {collapsedText ? "Show Less" : "Read More"}
                                </button>
                            )}
                        </Flex>
                    ) : null}
                    <Flex justify="space-between" vertical>
                        <BookStoreLinks book={book} />
                        <MoreBooksByAuthor book={book} />
                    </Flex>
                </div>
            </section>
        </>
    );
};

export default BookPage;
