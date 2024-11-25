import { FC, useState, useEffect } from "react";
import "./Atom.css";
import { Flex } from "antd";

interface BackgroundProps {
    background: string;
}

const Background: FC<BackgroundProps> = ({ background }) => {
    const [snippet, setSnippet] = useState<string | null>(null);
    const [author, setAuthor] = useState<string | null>(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch(
                "https://www.googleapis.com/books/v1/volumes?q=1984&orderBy=relevance&maxResults=1"
            );
            const data = await response.json();

            if (data.items && data.items.length > 0) {
                const randomBook =
                    data.items[Math.floor(Math.random() * data.items.length)];

                const textSnippet =
                    randomBook.searchInfo?.textSnippet ||
                    "No snippet available";
                const author =
                    randomBook.volumeInfo.authors?.join(", ") ||
                    "No author available"; // Ensure it's a string
                setSnippet(textSnippet);
                setAuthor(author);
            }
        };

        fetchBooks();
    }, []);

    return (
        <Flex className="absolute h-full w-full">
            <div className="text flex flex-col w-1/2 h-full justify-center">
            <div className="text-container mr-32 px-20 flex flex-col gap-10">
                <h1>{snippet ? snippet : "Loading snippet..."}</h1>
                <p>{author ? `- ${author}` : "Loading author..."}</p>

            </div>
            </div>
            <div
                className="background w-1/2"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>
        </Flex>
    );
};

export default Background;
