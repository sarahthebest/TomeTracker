import { useState, useEffect } from "react";
import "./Atom.css";
import { Flex } from "antd";
import excerptsData from "../../assets/json/excerpts.json";

const Background = () => {
    const [snippet, setSnippet] = useState<string | null>(null);
    const [author, setAuthor] = useState<string | null>(null);
    const [bookTitle, setBookTitle] = useState<string | null>(null);

    useEffect(() => {
        const randomExcerpt =
            excerptsData[Math.floor(Math.random() * excerptsData.length)];
        setSnippet(randomExcerpt.excerpt);
        setAuthor(randomExcerpt.author);
        setBookTitle(randomExcerpt.title);
    }, []);

    return (
        <Flex className="absolute h-full w-full">
            <div className="text w-1/2 flex flex-col justify-center">
                <div className="excerpt w-3/5 mx-auto flex flex-col gap-4">
                    <h2>{snippet ? `"${snippet}"` : "Loading excerpt..."}</h2>
                    <p className="text-accent">
                        - {author}, <em>{bookTitle}</em>
                    </p>
                </div>
            </div>
            <div
                className="background w-1/2"
                style={{
                    backgroundImage: `url(src/assets/img/bg1.webp)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>
        </Flex>
    );
};

export default Background;
