type CheckboxFieldProps = {
    label: string;
    id: string;
};

const CheckboxField = ({ label }: CheckboxFieldProps) => {
    const checkbox_options = [
        "Romance",
        "Adventure",
        "Fantasy",
        "Sci-fi",
        "Young adult",
        "Adult",
        "Manga",
        "Textbook",
        "Non-fiction",
    ];

    return (
        <div className="checkbox_wrapper flex flex-col">
            <label className="text-lg">{label}</label>
            <div className="checkbox flex flex-row gap-2 flex-wrap">
                {checkbox_options.map((genre, index) => (
                    <div
                        key={index}
                        className="checkbox_item flex items-center"
                    >
                        <input type="checkbox" id={genre} name={genre} />
                        <label className="ms-2" htmlFor={genre}>
                            {genre}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CheckboxField;
