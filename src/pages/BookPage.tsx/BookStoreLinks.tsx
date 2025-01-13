import React from "react";
import { Link } from "react-router-dom";
import { List, Divider } from "antd";
import { Book } from "../../components/Books/book.types";
import akademiLogo from "../../assets/img/akademilogo.svg";
import bokusLogo from "../../assets/img/bokuslogo.png";
import adlibrisLogo from "../../assets/img/adlibrislogo.png";

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
        <>
            <Divider
                orientation="left"
                className="text-text"
                style={{ color: "#fff" }}
            >
                Where to purchase?
            </Divider>
            <List
                bordered
                dataSource={sellers}
                renderItem={(seller) => (
                    <List.Item key={seller.name}>
                        <Link
                            to={
                                typeof seller.url === "function"
                                    ? seller.url(book)
                                    : `${seller.url}${encodeURIComponent(
                                          book.title
                                      )}`
                            }
                            style={{ color: "#fff" }}
                            className="flex flex-row place-items-center gap-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={seller.logo}
                                className="w-10 h-10 bg-white rounded-full"
                                alt=""
                            />
                            {seller.name}
                        </Link>
                    </List.Item>
                )}
            />
        </>
    );
};

export default BookStoreLinks;
