import { useState, useEffect } from "react";
import "./Atom.css";
import { Flex } from "antd";
import excerptsData from "../../assets/json/excerpts.json";
import CloudinaryImage from "./CloudinaryImg";

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
        <Flex className="absolute flex h-full min-h-screen top-0 w-full">
            <div className="text w-1/2 flex flex-col justify-center h-full">
                <div className="excerpt w-3/5 ml-20 flex-col gap-4 hidden md:flex">
                    <h2>{snippet ? `"${snippet}"` : "Loading excerpt..."}</h2>
                    <p className="text-accent">
                        - {author}, <em>{bookTitle}</em>
                    </p>
                </div>
            </div>
            <div className="background w-1/2">
                <CloudinaryImage
                    publicId="shelfbg-21"
                    className=" w-full h-full object-cover"
                />
            </div>
        </Flex>
    );
};

export default Background;
