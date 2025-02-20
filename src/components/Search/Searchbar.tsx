import { useState } from "react";
import axios from "axios";
import { Modal } from "antd";
import Btn from "../Atoms/Btn";
import { IoIosSearch } from "react-icons/io";
import FilterDropdown from "./FilterDropdown";
import { Link } from "react-router-dom";

interface FilterData {
  searchCategory: string[],
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

interface SearchResult {
  title: string;
  authors?: string[];
  imageLinks?: { smallThumbnail?: string; thumbnail?: string };
}

const Searchbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterData>({
    searchCategory: [],
    genres: [],
    pageRange: [],
    rating: 0,
  });

  const toggleModal = (open: boolean) => {
    setIsModalOpen(open);
    if (!open) {
      setSearchTerm("");
      setSearchResults([]);
      setFilters({
        searchCategory: [],
        genres: [],
        pageRange: [],
        rating: 0,
      });
    }
  };

  const onSearch = async () => {
    if (!searchTerm.trim()) return;

    try {
      setError(null);

      const filterParams = new URLSearchParams();

      filterParams.append("title", searchTerm);
      if (filters.genres.length > 0) {
        filterParams.append("genres", filters.genres.join(","));
      }
      if (filters.pageRange.length > 0) {
        filterParams.append("pageRange", filters.pageRange.join(","));
      }
      if (filters.rating) {
        filterParams.append("rating", filters.rating.toString());
      }

      const { data } = await axios.get(
        `http://localhost:5000/api/books/search`,
        {
          params: filterParams,
        }
      );
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("Failed to fetch search results. Please try again.");
    }
  };

  const handleFilterChange = (filterData: FilterData) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...filterData,
    }));
  };

  return (
    <>
      <div onClick={() => toggleModal(true)} className="search-container">
        <Btn
          text="Search"
          backgroundColor="var(--primary)"
          icon={<IoIosSearch />}
        />
      </div>
      <Modal
        open={isModalOpen}
        onCancel={() => toggleModal(false)}
        footer={null}
        closable={false}
      >
        <div className="w-full">
          <div className="w-full h-12 px-2 border rounded-md border-gray-300 flex items-center justify-between">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for books..."
              className="focus:outline-none focus:ring-0"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSearch();
                }
              }}
            />
            <Btn
              text="Search"
              backgroundColor="var(--primary)"
              icon={<IoIosSearch />}
              onClick={onSearch}
            />
          </div>
          <FilterDropdown onFilterChange={handleFilterChange} />
          {/* Error Message */}
          {error && (
            <p className="error-message text-red-500 mt-2">
              {error}
            </p>
          )}

          {/* Search Results */}
          <ul className="mt-4">
            {searchResults.map((book, index) => (
              <Link
                to={`/book/${generateSlug(book.title)}`}
                state={{ book }}
                key={index}
              >
                <li className="py-2 flex flex-row w-full">
                  <img
                    src={
                      book.imageLinks?.smallThumbnail ||
                      "/assets/img/No_Cover.webp"
                    }
                    alt={book.title || "No cover available"}
                    className="thumbnail rounded"
                  />
                  <div>
                    <h3 className="text-lg mr-4 heading">
                      {book.title}
                    </h3>
                    <p className="text-sm mr-4">
                      {book.authors?.join(", ") || "Unknown Author"}
                    </p>
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
