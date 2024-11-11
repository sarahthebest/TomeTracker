const Dropdown = () => {
    return (
        <>
            <label
                className="text-lg"
                htmlFor="readingStatus"
            >
                Choose a status for this book:
            </label>
            <select name="readingStatus" id="readingStatus">
                <option value="want_to">Want to read</option>
                <option value="reading">Reading</option>
                <option value="completed">Completed</option>
            </select>
        </>
    );
};

export default Dropdown;
