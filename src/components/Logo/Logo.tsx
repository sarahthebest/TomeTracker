import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link
            to={"/"}
            className="logo_wrapper w-60 h-full rounded-e-full pe-2 flex items-center"
        >
            <img
                src="src/assets/img/logo.png"
                className="h-fit w-16 ms-3 mt-2 invert"
                alt="Logo image"
            />
            <h1 className="heading">
                TomeTracker
            </h1>
        </Link>
    );
};

export default Logo;
