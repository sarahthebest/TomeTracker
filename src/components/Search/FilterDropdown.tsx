import { Checkbox, Collapse, Flex, Rate } from "antd";
import Btn from "../Atoms/Btn";

interface FilterData {
    genres: string[];
    pageRange: string[];
    rating: number;
}

interface FilterDropdownProps {
    onFilterChange: (filterData: FilterData) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ onFilterChange }) => {
    const handleGenreChange = (checkedValues: string[]) => {
        onFilterChange({ genres: checkedValues, pageRange: [], rating: 0 });
    };

    const handlePageRangeChange = (checkedValues: string[]) => {
        onFilterChange({ genres: [], pageRange: checkedValues, rating: 0 });
    };

    const handleRatingChange = (value: number) => {
        onFilterChange({ genres: [], pageRange: [], rating: value });
    };

    return (
        <div className="filter mt-4">
            <Collapse defaultActiveKey={["1"]} ghost>
                <Collapse.Panel
                    header="Filter books by"
                    key="1"
                    className="text-lg p-0"
                >
                    <Flex vertical className="filter-options gap-6 text-base">
                        <div className="filter-genre">
                            <h4 className="mb-4">Genres</h4>
                            <Checkbox.Group
                                onChange={handleGenreChange}
                                className="flex flex-wrap gap-2"
                            >
                                <Checkbox value="Fiction">Fiction</Checkbox>
                                <Checkbox value="Non-Fiction">
                                    Non-Fiction
                                </Checkbox>
                                <Checkbox value="Science">Science</Checkbox>
                                <Checkbox value="History">History</Checkbox>
                                <Checkbox value="Romance">Romance</Checkbox>
                                <Checkbox value="Young-adult">
                                    Young-adult
                                </Checkbox>
                            </Checkbox.Group>
                        </div>

                        <div className="filter-pages">
                            <h4 className="mb-4">Number of pages</h4>
                            <Checkbox.Group onChange={handlePageRangeChange}>
                                <Checkbox value="0-299">0-299</Checkbox>
                                <Checkbox value="300-499">300-499</Checkbox>
                                <Checkbox value="500+">500+</Checkbox>
                            </Checkbox.Group>
                        </div>

                        <div className="filter-rating">
                            <h4 className="mb-4">Rating</h4>
                            <Rate onChange={handleRatingChange} />
                            <span className="ms-6"> 0 to 5 stars</span>
                        </div>
                        <div className="filter-controls flex gap-4">
                            <Btn text="Reset filters" />
                            <Btn text="Filter" />
                        </div>
                    </Flex>
                </Collapse.Panel>
            </Collapse>
        </div>
    );
};

export default FilterDropdown;
