import { Input, Modal } from "antd";
import { useState } from "react";
import axios from "axios";
import "./Search.css";
import { Link } from "react-router-dom";

const { Search } = Input;
const generateSlug = (bookName: string) => {
    return bookName
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
};

const Searchbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState<string | null>(null);

    const toggleModal = (open: boolean) => {
        setIsModalOpen(open);
        if (!open) {
            setSearchTerm("");
            setSearchResults([]);
        }
    };

    const onSearch = async () => {
        if (!searchTerm.trim()) return;

        try {
            setError(null);
            const { data } = await axios.get(
                "http://localhost:5000/api/books/search",
                {
                    params: { title: searchTerm },
                }
            );
            setSearchResults(data);
        } catch (error) {
            console.error("Error fetching search results:", error);
            setError("Failed to fetch search results. Please try again.");
        }
    };

    return (
        <>
            <div onClick={() => toggleModal(true)} className="search-container">
                <Search className="w-full" placeholder="So much to read!" />
            </div>
            <Modal
                open={isModalOpen}
                onCancel={() => toggleModal(false)}
                footer={null}
                closable={false}
            >
                <Search
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                    placeholder="Search for books..."
                    onSearch={onSearch}
                />

                {error && (
                    <p className="error-message text-red-500 mt-2">{error}</p>
                )}

                <ul className="mt-4">
                    {searchResults.map((book, index) => (
                        <Link
                            to={`/book/${generateSlug(book.volumeInfo.title)}`}
                            state={{ book }}
                            key={index}
                        >
                            <li className="py-2 flex flex-row w-full">
                                <img
                                    src={
                                        book.volumeInfo.imageLinks
                                            ?.smallThumbnail ||
                                        "/assets/img/No_Cover.webp"
                                    }
                                    alt={
                                        book.volumeInfo.title ||
                                        "No cover available"
                                    }
                                    className="thumbnail"
                                />
                                <div>
                                    <h3 className="text-lg mr-4 heading">
                                        {book.volumeInfo.title}
                                    </h3>
                                    <p className="text-sm mr-4 text-text">
                                        {book.volumeInfo.authors?.join(", ") ||
                                            "Unknown Author"}
                                    </p>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </Modal>
        </>
    );
};

export default Searchbar;
