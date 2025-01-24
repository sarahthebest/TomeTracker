import { useLocation, useNavigate } from "react-router-dom";
import { GiBookshelf, GiSpellBook } from "react-icons/gi";
import Btn from "../Atoms/Btn";
import Logo from "../Logo/Logo";
import "./Navbar.css";
import Searchbar from "../Search/Searchbar";
import { CiLogin, CiLogout } from "react-icons/ci";
import { useAuth } from "../Auth/AuthProvider";

type NavLink = {
    name: string;
    icon: React.ReactNode;
    link?: string; 
    action?: () => void;
};

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleNavigate = (path: string) => {
        navigate(path);
    };
    const { isAuthenticated, logout } = useAuth();
    const isActive = (path: string) => location.pathname === path;

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const navLinks: NavLink[] = [
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
    ];

    if (isAuthenticated) {
        navLinks.push({
            name: "Logout",
            icon: <CiLogout />,
            action: handleLogout,
        });
    } else {
        navLinks.push({
            name: "Login",
            icon: <CiLogin />,
            link: "/login",
        });
    }

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
                        className={isActive("/shelves") ? "active-link" : ""}
                        text={link.name}
                        icon={link.icon}
                        onClick={() =>
                            link.action
                                ? link.action()
                                : link.link ? handleNavigate(link.link) : null
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default Navbar;
