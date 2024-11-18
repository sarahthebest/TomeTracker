import { useNavigate } from "react-router-dom";
import AddBook from "../AddBook/AddBook";
import Btn from "../Atoms/Btn";
import Logo from "../Logo/Logo";
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const handleNavigate = (path: string) => {
        navigate(path);
    };

    return (
        <div className="nav w-full flex border-b border-border/20 flex-row mx-auto
        ' justify-between sticky top-0 py-2 z-10">
            <Logo />
            <div className="user_handler flex flex-row gap-4 px-4 h-10 my-auto z-10">
                <div className="search"></div>
                <AddBook />
                <Btn
                    onClick={() => handleNavigate("/login")}
                    text="Login"
                    backgroundColor="var(--primary)"
                />
            </div>
        </div>
    );
};

export default Navbar;
