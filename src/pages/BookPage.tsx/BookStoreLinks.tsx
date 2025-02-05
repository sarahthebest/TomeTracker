import React from "react";
import { Flex, Collapse } from "antd";
import { Book } from "../../components/Books/book.types";
import { IoStorefront } from "react-icons/io5";
import "./BookPage.css";
import { Link } from "react-router-dom";
import CloudinaryImage from "../../components/Atoms/CloudinaryImg";

const sellers = [
    {
        name: "Akademibokhandeln",
        url: (book: Book) =>
            `https://www.akademibokhandeln.se/bok/${encodeURIComponent(
                book.title
            )
                .toLowerCase()
                .replace(/%20/g, "-")}/${book.isbn?.[0]}`,
        usesIsbn: true,
        logo: "akademilogo_xbwjaz",
    },
    {
        name: "Bokus",
        url: (book: Book) =>
            `https://www.bokus.com/bok/${book.isbn?.[0]}/${encodeURIComponent(
                book.title
            )
                .toLowerCase()
                .replace(/%20/g, "-")}/`,
        usesIsbn: true,
        logo: "bokuslogo_pkcnsl",
    },
    {
        name: "Adlibris",
        url: (book: Book) =>
            `https://www.adlibris.com/se/bok/${encodeURIComponent(book.title)
                .toLowerCase()
                .replace(/%20/g, "-")}-${book.isbn?.[0]}`,
        usesIsbn: true,
        logo: "adlibrislogo_d0eaqr",
    },
];

interface Props {
    book: Book;
}

const BookStoreLinks: React.FC<Props> = ({ book }) => {
    return (
        <Flex align="center" gap={6} className="my-10">
            <Collapse
                className="w-full bg-transparent p-0"
                bordered={false}
                items={[
                    {
                        key: "1",
                        label: (
                            <Flex align="center" gap={6} className="text-text">
                                <IoStorefront />
                                Available to buy at{" "}
                                <span className="bg-accent px-2 rounded-full hover:brightness-125">
                                    {sellers.length} sellers
                                </span>
                            </Flex>
                        ),
                        children: (
                            <ul className="flex flex-col mt-4 w-full">
                                {sellers.map((store) => (
                                    <li
                                        key={store.name}
                                        className="flex w-full border-b p-2 border-white/20 md:w-2/4 flex-row
                                     hover:bg-pop/10 text-text justify-between place-items-center"
                                    >
                                        <Flex className="place-items-center gap-2">
                                            <CloudinaryImage 
                                            publicId={store.logo}
                                            width={16}
                                            height={16}
                                            className="bg-white rounded-full"/>
                                            {store.name}
                                        </Flex>
                                        <Link
                                            className="rounded-full bg-accent px-2 shadow-md hover:brightness-125"
                                            to={
                                                typeof store.url === "function"
                                                    ? store.url(book)
                                                    : `${
                                                          store.url
                                                      }${encodeURIComponent(
                                                          book.title
                                                      )}`
                                            }
                                            style={{ color: "#fff" }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Buy Book
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ),
                    },
                ]}
            />
        </Flex>
    );
};

export default BookStoreLinks;
