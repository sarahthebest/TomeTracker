import React from "react";
import { Flex, Collapse } from "antd";
import { Book } from "../../components/Books/book.types";
import akademiLogo from "../../assets/img/akademilogo.svg";
import bokusLogo from "../../assets/img/bokuslogo.png";
import adlibrisLogo from "../../assets/img/adlibrislogo.png";
import { IoStorefront } from "react-icons/io5";
import "./BookPage.css";
import { Link } from "react-router-dom";

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
        logo: akademiLogo,
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
        logo: bokusLogo,
    },
    {
        name: "Adlibris",
        url: (book: Book) =>
            `https://www.adlibris.com/se/bok/${encodeURIComponent(book.title)
                .toLowerCase()
                .replace(/%20/g, "-")}-${book.isbn?.[0]}`,
        usesIsbn: true,
        logo: adlibrisLogo,
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
                            <ul className="flex flex-col mt-4">
                                {sellers.map((store) => (
                                    <li
                                        key={store.name}
                                        className="flex  border-b p-2 border-white/20 w-2/4 flex-row
                                     hover:bg-pop/10 text-text justify-between place-items-center"
                                    >
                                        <Flex className="place-items-center gap-2">
                                            <img
                                                src={store.logo}
                                                className="w-10 h-10 bg-white rounded-full"
                                                alt=""
                                            />
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
