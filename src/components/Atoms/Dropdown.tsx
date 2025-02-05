import { Dropdown as AntDropdown, Space, MenuProps } from "antd";
import { IoChevronDownOutline } from "react-icons/io5";

interface DropdownProps {
    book_status: "Reading" | "Completed" | "Want to read";
    set_book_status: (status: "Reading" | "Completed" | "Want to read") => void;
}

const BookStatusDropdown = ({
    book_status,
    set_book_status,
}: DropdownProps) => {
    const items: MenuProps["items"] = [
        {
            key: "1",
            label: "Want to Read",
            disabled: book_status === "Want to read",
        },
        {
            key: "2",
            label: "Reading",
            disabled: book_status === "Reading",
        },
        {
            key: "3",
            label: "Completed",
            disabled: book_status === "Completed",
        },
    ];

    const handleMenuClick = (e: { key: string }) => {
        const statusMap: {
            [key: string]: "Reading" | "Completed" | "Want to read";
        } = {
            "1": "Want to read",
            "2": "Reading",
            "3": "Completed",
        };
        set_book_status(statusMap[e.key]);
    };

    return (
        <AntDropdown
            menu={{
                items,
                onClick: handleMenuClick,
            }}
            trigger={["click"]}
            className="w-fit"
        >
            <a className="h-fit" onClick={(e) => e.preventDefault()}>
                <Space className="bg-primary w-fit h-fit px-4 py-1 rounded-full flex items-center text-text">
                    {book_status}
                    <IoChevronDownOutline size={16} className="" />
                </Space>
            </a>
        </AntDropdown>
    );
};

export default BookStatusDropdown;
