import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Bg from "../../components/Common/Bg";
import CookieConsent from "../../components/Cookies/CookieConsent";
import { Tag, Flex } from "antd";

const BookPage = () => {
    const location = useLocation();
    const book = location.state?.book;
    const thumbnailUrl = book.imageLinks?.thumbnail || null;
    console.log(book);
    return (
        <section className="page flex flex-col relative min-h-screen ">
            <Navbar />
            <Bg />
            <CookieConsent />
            <div className="book_wrapper flex flex-col gap-4 relative z-10 mt-20 w-2/3 mx-auto">
            <Link to="/shelves">Return</Link>
                <div className="book_info gap-8 flex">
                    <img src={thumbnailUrl} alt="" className="w-fit" />
                    <Flex vertical gap={8}>
                        <h1 className="heading text-3xl">{book.title}</h1>
                        <p>Written by {book.authors}</p>
                        <Tag color="magenta" className="w-fit">{book.categories}</Tag>
                        <div className="status"></div>
                    </Flex>
                </div>
                <p>{book.description}</p>
            </div>
        </section>
    );
};

export default BookPage;
