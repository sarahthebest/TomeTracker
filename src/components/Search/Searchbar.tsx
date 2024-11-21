import { Input, Modal } from "antd";
import { useState } from "react";
import axios from "axios";
import "./Search.css";

const { Search } = Input;

const Searchbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

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
            const { data } = await axios.get("http://localhost:5000/api/books/search", {
                params: { title: searchTerm },
            });
            setSearchResults(data);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    return (
        <>
            <Search
                className="w-full"
                placeholder="So much to read!"
                onClick={() => toggleModal(true)}
            />

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
                    placeholder="So many books..."
                    onSearch={onSearch}
                />

                {searchResults.length > 0 && (
                    <ul className="mt-4">
                        {searchResults.map((book, index) => (
                            <li key={index} className="py-2 flex flex-row w-full">
                                <img
                                    src={
                                        book.volumeInfo.imageLinks?.smallThumbnail ||
                                        "src/assets/img/No_Cover.webp"
                                    }
                                    alt={book.volumeInfo.title || "No cover available"}
                                    className="thumbnail"
                                />
                                <div>
                                    <h3 className="text-lg mr-4">{book.volumeInfo.title}</h3>
                                    <p className="text-sm mr-4 text-gray-500">
                                        {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </Modal>
        </>
    );
};

export default Searchbar;
