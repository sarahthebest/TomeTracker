import AddBook from "../AddBook/AddBook";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar h-full bg-stone-800">
            <div className="sidebar_items mt-10  flex flex-col px-2">
                <AddBook />
            </div>
        </div>
    );
};

export default Sidebar;
