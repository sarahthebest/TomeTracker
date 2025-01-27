const Genres = () => {
    const genres = [
        {
            genre: "Romance",
            coverImg: "src/assets/img/genreIMGs/romance.jpg",
        },
        {
            genre: "Fantasy",

            coverImg: "src/assets/img/genreIMGs/fantasy.jpg",
        },
        {
            genre: "Sci-Fi",
            coverImg: "src/assets/img/genreIMGs/scifi.jpg",
        },
        {
            genre: "Young Adult",
            coverImg: "src/assets/img/genreIMGs/youngadult.webp",
        },
        {
            genre: "Mystery",
            coverImg: "src/assets/img/genreIMGs/mystery.jpg",
        },
        {
            genre: "Horror",
            coverImg: "src/assets/img/genreIMGs/horror.jpg",
        },
    ];
    return (
        <div className="genres w-full md:w-2/3 mx-auto overflow-hidden">
            <h2 className="mt-4 mb-6">
                Check out some our popular{" "}
                <span className="underline italic">Genres</span>
            </h2>
            <div className="genreBoxes md:w-full p-1 gap-4 flex-row rounded overflow-x-auto whitespace-nowrap pb-2">
                {genres.map((genre, index) => (
                    <div
                        className="genre inline p-4 justify-between relative overflow-hidden rounded ease-in-out transition-all duration-300
                         bg-gradient-to-t from-bg to-primary align-bottom"
                        key={index}
                    >
                        <img
                            src={genre.coverImg}
                            className="absolute z-10 left-0 -top-10 object-fill w-full"
                        />
                        <h3 className="genreTitle z-50 relative text-text">
                            {genre.genre}
                        </h3>
                        <div className="progBlurLeft rounded absolute left-0 top-0 z-40" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Genres;
