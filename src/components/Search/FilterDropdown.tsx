import { Checkbox, Collapse, Radio, Rate, Form } from "antd";
import Btn from "../Atoms/Btn";

interface FilterData {
    searchCategory: string[];
    genres: string[];
    pageRange: string[];
    rating: number;
}

const FilterDropdown: React.FC<{
    filters: FilterData;
    onFilterChange: (filterData: FilterData) => void;
    onResetFilters: () => void;
}> = ({ filters, onFilterChange, onResetFilters }) => {
    return (
        <div className="filter mt-4">
            <Collapse defaultActiveKey={["1"]} ghost>
                <Collapse.Panel header="Filter books by" key="1" className="p-0">
                    <Form className="flex flex-col gap-6 bg-pop/10 p-4 rounded">
                        <div className="filter-search">
                            <h3 className="mb-4 text-sm">Search by</h3>
                            {/* Controls the search category */}
                            <Radio.Group
                                name="searchCategory"
                                className="flex"
                                onChange={(e) => onFilterChange({ ...filters, searchCategory: [e.target.value] })}
                                value={filters.searchCategory[0] || ""}
                            >
                                {["Author", "Title", "Genre"].map((category) => (
                                    <Radio key={category} value={category}>
                                        {category}
                                    </Radio>
                                ))}
                            </Radio.Group>
                        </div>

                        {/* Genre Filter */}
                        <div className="filter-genre">
                            <h4 className="mb-4 text-sm">Genres</h4>
                            <Checkbox.Group
                                value={filters.genres}
                                onChange={(values) => onFilterChange({ ...filters, genres: values as string[] })}
                            >
                                <Checkbox value="Fiction">Fiction</Checkbox>
                                <Checkbox value="Non-Fiction">Non-Fiction</Checkbox>
                                <Checkbox value="Science">Science</Checkbox>
                            </Checkbox.Group>
                        </div>

                        {/* Page Range Filter */}
                        <div className="filter-pages">
                            <h4 className="mb-4 text-sm">Number of pages</h4>
                            <Checkbox.Group
                                value={filters.pageRange}
                                onChange={(values) => onFilterChange({ ...filters, pageRange: values as string[] })}
                            >
                                <Checkbox value="0-299">0-299</Checkbox>
                                <Checkbox value="300-499">300-499</Checkbox>
                                <Checkbox value="500+">500+</Checkbox>
                            </Checkbox.Group>
                        </div>

                        {/* Rating Filter */}
                        <div className="filter-rating">
                            <h4 className="mb-4 text-sm">Rating</h4>
                            <Rate
                                value={filters.rating}
                                onChange={(value) => onFilterChange({ ...filters, rating: value })}
                            />
                        </div>

                        <div className="filter-controls flex gap-4">
                            <Btn text="Reset filters" onClick={onResetFilters} />
                        </div>
                    </Form>
                </Collapse.Panel>
            </Collapse>
        </div>
    );
};


export default FilterDropdown;
