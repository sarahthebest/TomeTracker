import { Dropdown as AntDropdown, Space, MenuProps } from "antd";

const ListDropdown = () => {
    const items: MenuProps["items"] = [
        {
            key:"1",
            
        }
    ]
    return ( 
        <AntDropdown
            menu={{
                items,
            }}
            trigger={["click"]}
            className="w-fit"
        >
            <a className="h-fit" onClick={(e) => e.preventDefault()}>
                <Space className="bg-primary w-fit h-fit px-4 py-1 rounded-full flex items-center text-text">

                </Space>
            </a>
        </AntDropdown>
             );
}
 
export default ListDropdown;