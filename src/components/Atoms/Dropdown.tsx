type DropdownProps = {
    book_status: string;
    set_book_status: (status: string) => void;
};

const Dropdown = ({ book_status, set_book_status }: DropdownProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        set_book_status(e.target.value);
    };

    return (
        <>
            <label className="text-lg" htmlFor="readingStatus">
                Choose a status for this book:
            </label>
            <select
                name="readingStatus"
                id="readingStatus"
                value={book_status}
                onChange={handleChange}
            >
                <option value="Want to read">Want to read</option>
                <option value="Reading">Reading</option>
                <option value="Completed">Completed</option>
            </select>
        </>
    );
};

export default Dropdown;
