import { useState } from "react";
import { Modal } from "antd";
import Btn from "../Atoms/Btn";
import { IoIosSearch } from "react-icons/io";
import FilterDropdown from "./FilterDropdown";
import { Link } from "react-router-dom";
import { UseSearchBooks } from "../../hooks/custom_hooks";
import "./Search.css";
import { getErrorMessage } from "../../utils/globalUtils";

interface FilterData {
    searchCategory: string[];
    genres: string[];
    pageRange: string[];
    rating: number;
}

const generateSlug = (bookName: string) => {
    return bookName
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
};
const Searchbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState<FilterData>({
        searchCategory: [],
        genres: [],
        pageRange: [],
        rating: 0,
    });
    const { error, searchBooks, searchResults } = UseSearchBooks();

    const toggleModal = (open: boolean) => {
        setIsModalOpen(open);
        if (!open) {
            setSearchTerm("");
            resetFilters();
        }
    };

    const onSearch = async () => {
        if (!searchTerm.trim()) return;
        try {
            await searchBooks(
                searchTerm,
                filters.searchCategory[0] || "",
                filters.rating,
                filters.pageRange,
                filters.genres
            );
        } catch (err) {
            console.error("Search failed:", getErrorMessage(err));
        }
    };

    const handleFilterChange = (filterData: FilterData) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...filterData,
        }));
    };

    const resetFilters = () => {
        setFilters({
            searchCategory: [],
            genres: [],
            pageRange: [],
            rating: 0,
        });
    };

    return (
        <>
            <div onClick={() => toggleModal(true)} className="search-container">
                <Btn text="Search" backgroundColor="var(--primary)" icon={<IoIosSearch />} />
            </div>
            <Modal open={isModalOpen} onCancel={() => toggleModal(false)} footer={null} closable={false} width={"50%"} destroyOnClose={true}>
                <div className="w-full">
                    <div className="w-full h-12 px-2 border rounded-md flex items-center justify-between">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search for books..."
                            className="focus:outline-none focus:ring-0 w-full"
                            onKeyDown={(e) => e.key === "Enter" && onSearch()}
                        />
                        <Btn text="Search" backgroundColor="var(--primary)" icon={<IoIosSearch />} onClick={onSearch} />
                    </div>

                    <FilterDropdown filters={filters} onFilterChange={handleFilterChange} onResetFilters={resetFilters} />

                    {error && <p className="error-message text-red-500 mt-2">{error}</p>}

                    <ul className="mt-4">
                        {searchResults.map((book, index) => (
                            <Link to={`/book/${generateSlug(book.title)}`} state={{ book }} key={index}>
                                <li className="py-2 flex flex-row w-full gap-4 border-b border-black/10">
                                    <img src={book?.imageLinks?.thumbnail || "src/assets/img/No_Cover.webp"} alt={book.title || "No cover available"} className="thumbnail rounded w-32" />
                                    <div>
                                        <h3 className="text-lg mr-4 heading">{book.title}</h3>
                                        <p className="text-sm mr-4">{book.authors?.join(", ") || "Unknown Author"}</p>
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </Modal>
        </>
    );
};


export default Searchbar;
