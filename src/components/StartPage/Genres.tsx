import CloudinaryImage from "../Atoms/CloudinaryImg";

const Genres = () => {
    const genres = [
        {
            genre: "Romance",
            coverImg: "romance-genre",
        },
        {
            genre: "Sci-Fi",
            coverImg: "scifi-genre",
        },
        {
            genre: "Young Adult",
            coverImg: "young-adult-genre",
        },
        {
            genre: "Fantasy",
            coverImg: "fantasy-genre",
        },
        {
            genre: "Mystery",
            coverImg: "mystery-genre",
        },
        {
            genre: "Horror",
            coverImg: "horror-genre",
        },
    ];
    return (
        <div className="genres w-full md:w-2/3 mx-auto overflow-hidden">
            <h2 className="mt-4 mb-6">
                Check out some our popular
                <span className="underline italic">Genres</span>
            </h2>
            <div className="genreBoxes md:w-full p-1 gap-4 flex-row rounded overflow-x-auto whitespace-nowrap pb-2">
                {genres.map((genre, index) => (
                    <div
                        className="genre inline p-4 justify-between relative overflow-hidden rounded ease-in-out transition-all duration-300
                         bg-gradient-to-t from-bg to-primary align-bottom"
                        key={index}
                    >
                         <CloudinaryImage
                            publicId={genre.coverImg} 
                            className="absolute top-0 left-0"
                            width={300} 
                            height={146} 
                        />
                        <h3 className="genreTitle z-50 relative text-text">
                            {genre.genre}
                        </h3>
                        <div className="progBlurLeft rounded absolute left-0 top-0 z-30" />
                        <div className="rounded pink absolute left-0 top-0 z-40 bg-active opacity-20 h-full" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Genres;
