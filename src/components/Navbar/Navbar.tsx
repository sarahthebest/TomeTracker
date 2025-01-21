import { useNavigate } from "react-router-dom";
import { GiBookshelf, GiSpellBook } from "react-icons/gi";
import Btn from "../Atoms/Btn";
import Logo from "../Logo/Logo";
import "./Navbar.css";
import Searchbar from "../Search/Searchbar";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
    const navigate = useNavigate();
    const handleNavigate = (path: string) => {
        navigate(path);
    };
    const navLinks = [
        {
            name: "Shelves",
            icon: <GiBookshelf />,
            link: "/shelves",
        },
        {
            name: "Browse",
            icon: <GiSpellBook />,
            link: "/library",
        },
        {
            name: "Login",
            icon: <CiLogin />,
            link: "/login",
        },
    ];
    return (
        <div
            className="nav w-full flex border-b border-border/20 flex-row place-items-center
         justify-between sticky top-0 py-2 z-50"
        >
            <Logo />
            <div className="user_handler flex flex-row gap-4 h-10 my-auto z-10 me-0 place-items-center pe-10">
                <Searchbar />
                {navLinks.map((link, index) => (
                    <Btn
                        key={index}
                        onClick={() => handleNavigate(link.link)}
                        text={link.name}
                        backgroundColor="var(--primary)"
                        icon={link.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default Navbar;
