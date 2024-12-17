const Genres = () => {
    const genres = ["Romance", "Fantasy", "Sci-Fi", "Young Adult"];
    return (
        <div className="genres w-2/3 mx-auto">
            <h2 className="mt-4 mb-6">
                Check out some popular <span className="underline">Genres</span>
            </h2>
            <div className="genreBoxes flex gap-4">
                {genres.map((genre, index) => (
                    <div className="genre bg-secondary p-4 rounded" key={index}>
                        <h3>{genre}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Genres;
