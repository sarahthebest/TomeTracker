import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link
            to={"/"}
            className="logo_wrapper w-60 h-full group rounded-e-full pe-2 flex items-center"
        >
            <img
                src="src/assets/logo.png"
                className="h-fit w-16 ms-3 mt-2 duration-200 group-hover:invert"
                alt="Logo image"
            />
            <h1 className="medium text-gray-900 duration-200 group-hover:invert">
                TomeTracker
            </h1>
        </Link>
    );
};

export default Logo;
