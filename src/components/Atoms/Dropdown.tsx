const Dropdown = () => {
    return (
        <>
            <label htmlFor="readingStatus">
                Choose a status for this book:
            </label>
            <select name="readingStatus" id="readingStatus">
                <option value="want_to">Want ro read</option>
                <option value="reading">Reading</option>
                <option value="finished">Finished reading</option>
            </select>
        </>
    );
};

export default Dropdown;
