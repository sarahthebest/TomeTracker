const BookShelf = () => {
    const shelves = ["Want to read", "Reading", "Completed"];
    return (
        <div className="shelf_wrapper h-full bg-red-50 w-full">
            {shelves.map((shelf, index) => (
                <div key={index} className="shelf h-72">
                    <h2>{shelf}</h2>
                </div>
            ))}
        </div>
    );
};

export default BookShelf;
