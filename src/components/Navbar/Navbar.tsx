import { useLocation, useNavigate } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import Btn from "../Atoms/Btn";
import Logo from "../Logo/Logo";
import "./Navbar.css";
import Searchbar from "../Search/Searchbar";
import { CiLogin, CiLogout } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Drawer, Menu } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAuthStore } from "../../stores/authStore";

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
    const { isLoggedIn, checkAuthStatus, logout } = useAuthStore();
    const [show, setShow] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isActive = (path: string) => location.pathname === path;
    const [, setWindowWidth] = useState(window.innerWidth);

    const handleLogout = () => {
        logout();
        navigate("/");
        setIsMenuOpen(false);
    };

    const navLinks: NavLink[] = [
        {
            name: "Shelves",
            icon: <GiBookshelf />,
            link: "/shelves",
        },
        // {
        //     name: "Browse",
        //     icon: <GiSpellBook />,
        //     link: "/library",
        // },
    ];

    if (isLoggedIn) {
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

    const menuItems = navLinks.map((link) => ({
        key: link.link || link.name,
        icon: link.icon,
        label: link.name,
        onClick: link.action
            ? link.action
            : () => handleNavigate(link.link || ""),
    }));

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY < lastScrollY) {
                setShow(true);
            } else {
                setShow(false);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        checkAuthStatus();
    }, [checkAuthStatus]);

    return (
        <div
            id="navbar"
            className={`transition-all duration-300 ease-in-out nav w-full flex border-b border-border/20 flex-row place-items-center justify-between fixed top-0 py-2 z-50 ${
                show
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-16 pointer-events-none"
            }`}
        >
            <Logo />
            <div className="user_handler hidden md:flex flex-row gap-4 h-10 my-auto z-10 me-0 place-items-center pe-10">
                <Searchbar />
                {navLinks.map((link, index) => (
                    <Btn
                        key={index}
                        className={
                            isActive(link.link || "") ? "active-link" : ""
                        }
                        text={link.name}
                        icon={link.icon}
                        backgroundColor="var(--accent)"
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
            <div className="mobile-menu hidden bg-bg">
                <Menu mode="inline" items={menuItems} />
            </div>

            <div
                className="hamburger md:hidden me-4"
                onClick={() => setIsMenuOpen(true)}
            >
                <RxHamburgerMenu size={28} />
            </div>

            <Drawer
                title="Menu Links"
                placement="left"
                open={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                width={"100%"}
                footer={<Logo />}
            >
                <Menu
                    className="bg-bg text-text"
                    mode="inline"
                    items={menuItems}
                />
            </Drawer>
        </div>
    );
};

export default Navbar;
