import { Book } from "../../components/Books/book.types";
import { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Tooltip } from "antd";
import { getErrorMessage } from "../../utils/globalUtils";
import { Link } from "react-router-dom";
import { getBookImage } from "../../components/Books/book.types";

interface Props {
    book: Book;
}

const MoreBooksByAuthor: React.FC<Props> = ({ book }) => {
    const [books, setBooks] = useState<Book[]>([]);
    const author = book.authors[0];
    const title = book.title;

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");
    };

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const endpoint =
                    "http://localhost:5000/api/books/searchByAuthor";
                const { data } = await axios.get(endpoint, {
                    params: { author },
                });
                setBooks(data);
            } catch (error) {
                const errorMessage = getErrorMessage(error);
                console.error("Error:", errorMessage);
            }
        };
        if (author) {
            fetchBooks();
        }
    }, [author]);

    return (
        <Flex gap={6} vertical>
            <h2>
                More books by <span className="text-accent">{author}</span>
            </h2>
            <div className="gap-6 my-10 md:w-full flex flex-row rounded overflow-x-auto whitespace-nowrap pb-2 h-fit">
                {books.length > 0 ? (
                    books.map((book, index) => (
                        <div className="h-fit w-fit p-1 flex-shrink-0 inline justify-between relative overflow-hidden rounded ease-in-out transition-all duration-200
                         ">
                        <Link
                            className="bookWrapper"
                            key={index}
                            to={`/book/${generateSlug(title)}`}
                        >
                            <Tooltip placement="bottom" color="var(--primary)" title={book.volumeInfo.title}>
                            <img
                                        className="bookThumbnail rounded-md w-32 h-48"
                                        src={getBookImage(book.volumeInfo.imageLinks)} 
                                        alt={book.volumeInfo.title}
                                    />
                            </Tooltip>
                        </Link>
                        </div>
                    ))
                ) : (
                    <p>No other books found for this author.</p>
                )}
            </div>
        </Flex>
    );
};

export default MoreBooksByAuthor;
