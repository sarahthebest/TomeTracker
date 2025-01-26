import { useLocation, useNavigate } from "react-router-dom";
import { GiBookshelf, GiSpellBook } from "react-icons/gi";
import Btn from "../Atoms/Btn";
import Logo from "../Logo/Logo";
import "./Navbar.css";
import Searchbar from "../Search/Searchbar";
import { CiLogin, CiLogout } from "react-icons/ci";
import { useAuth } from "../Auth/AuthProvider";
import { useEffect, useState } from "react";

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
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const isActive = (path: string) => location.pathname === path;

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
            setShow(false);
        } else {
            setShow(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);

        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

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
            className={`transition-all duration-300 ease-in-out nav w-full flex border-b border-border/20 flex-row place-items-center justify-between sticky top-0 py-2 z-50 ${
                show
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-16 pointer-events-none"
            }`}
        >
            <Logo />
            <div className="user_handler flex flex-row gap-4 h-10 my-auto z-10 me-0 place-items-center pe-10">
                <Searchbar />
                {navLinks.map((link, index) => (
                    <Btn
                        key={index}
                        className={
                            isActive(link.link || "") ? "active-link" : ""
                        }
                        text={link.name}
                        icon={link.icon}
                        onClick={() =>
                            link.action
                                ? link.action()
                                : link.link
                                ? handleNavigate(link.link)
                                : null
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default Navbar;
