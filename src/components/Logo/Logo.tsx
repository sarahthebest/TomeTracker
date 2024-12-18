import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link
            to={"/"}
            className="logo_wrapper w-60 h-full rounded-e-full pe-2 flex items-center"
        >
            <img
                src="src/assets/img/logo.png"
                className="h-fit w-5/6 ms-3"
                alt="Logo image"
            />
        </Link>
    );
};

export default Logo;
