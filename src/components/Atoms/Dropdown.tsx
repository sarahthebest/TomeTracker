import { Dropdown as AntDropdown, Space, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

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
    },
    {
      key: "2",
      label: "Reading",
    },
    {
      key: "3",
      label: "Completed",
    },
  ];

  const handleMenuClick = (e: { key: string }) => {
    const statusMap: { [key: string]: "Reading" | "Completed" | "Want to read" } = {
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
    >
      <a className="h-fit" onClick={(e) => e.preventDefault()}>
        <Space>
          {book_status}
          <DownOutlined />
        </Space>
      </a>
    </AntDropdown>
  );
};

export default BookStatusDropdown;