import React from "react";

type CheckboxFieldProps = {
    label: string;
    id: string;
    value: string[];
    onChange: (selectedGenres: string[]) => void;
};

const CheckboxField = ({ label, value, onChange }: CheckboxFieldProps) => {
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

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const genre = e.target.name;
        const isChecked = e.target.checked;

        const newValue = isChecked
            ? [...value, genre]
            : value.filter((item) => item !== genre);

        onChange(newValue);
    };

    return (
        <div className="checkbox_wrapper flex flex-col">
            <label className="text-lg">{label}</label>
            <div className="checkbox flex flex-row gap-2 flex-wrap">
                {checkbox_options.map((genre, index) => (
                    <div
                        key={index}
                        className="checkbox_item flex items-center"
                    >
                        <input
                            type="checkbox"
                            id={genre}
                            name={genre}
                            checked={value.includes(genre)}
                            onChange={handleCheckboxChange}
                        />
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
