import { Input, Modal } from "antd";
import { useState } from "react";
import axios from "axios";

const { Search } = Input;

const Searchbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onSearch = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/books/search",
                {
                    params: { title: searchTerm },
                }
            );
            console.log(searchTerm);
            setSearchResults(response.data);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    return (
        <>
            <Search
                className="w-full"
                placeholder="So much to read!"
                onClick={showModal} 
            />

            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                closable={false}
            >
                <Search
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className="w-full"
                    placeholder="So many books..."
                    onSearch={onSearch} 
                />

                {searchResults.length > 0 && (
                    <ul className="mt-4">
                        {searchResults.map((book, index) => (
                            <li key={index} className="py-2">
                                {book.volumeInfo.title || "No title available"}
                            </li>
                        ))}
                    </ul>
                )}
            </Modal>
        </>
    );
};

export default Searchbar;
