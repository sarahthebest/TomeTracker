const Genres = () => {
    const genres = [
        "Romance 💃",
        "Fantasy 🐉",
        "Sci-Fi 🤖",
        "Young Adult ✨",
        "Mystery 🕵️",
        "Horror 👹",
    ];
    return (
        <div className="genres md:w-2/3 mx-auto w-fit overflow-hidden">
            <h2 className="mt-4 mb-6">
                Check out some popular <span className="underline">Genres</span>
            </h2>
            <div className="genreBoxes w-96 md:w-full gap-4 flex-row rounded overflow-x-auto whitespace-nowrap pb-2">
                {genres.map((genre, index) => (
                    <div
                        className="genre p-4 justify-between overflow-y-hidden rounded hover:brightness-125 ease-in-out transition-all duration-200
                         bg-gradient-to-t from-bg to-primary"
                        key={index}
                    >
                        <h3 className="genreTitle">{genre}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Genres;
