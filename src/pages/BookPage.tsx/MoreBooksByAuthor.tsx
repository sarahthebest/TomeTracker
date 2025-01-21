import { Book } from "../../components/Books/book.types";
import { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Space, Tooltip } from "antd";
import { getErrorMessage } from "../../utils/globalUtils";
import { Link } from "react-router-dom";

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
            <Space className="gap-8 my-10 overflow-x-scroll w-full bookSlider">
                {books.length > 0 ? (
                    books.map((book, index) => (
                        <Link
                            className="bookWrapper"
                            key={index}
                            to={`/book/${generateSlug(title)}`}
                        >
                            <Tooltip placement="bottom" color="var(--primary)" title={book.volumeInfo.title}>
                            <img
                                className="bookThumbnail rounded-md"
                                src={book.volumeInfo?.imageLinks?.thumbnail}
                                alt={title}
                            />
                            </Tooltip>
                        </Link>
                    ))
                ) : (
                    <p>No other books found for this author.</p>
                )}
            </Space>
        </Flex>
    );
};

export default MoreBooksByAuthor;
