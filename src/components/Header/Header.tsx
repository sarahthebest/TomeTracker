import { Link } from "react-router-dom";
import FeaturesList from "./FeatureBox/FeatureBox";
import "./Header.css";
import { BsStars } from "react-icons/bs";

const Header = () => {
    return (
        <>
            <div className="header px-4 flex flex-col gap-4 mb-4 p-4 absolute pt-20">
                <div className="headerContent flex flex-row place-content-center">
                    <img
                        className="w-1/4"
                        src="src/assets/reading.svg"
                        alt="Illustration from undraw.co"
                    />
                    <div className="content w-2/5 ">
                        <h1 className="huge medium font-bold text-accent">
                            TomeTracker
                        </h1>
                        <p className="light mb-4 ">
                            Wander through stories, find magic in every page,
                            and let each book lead you to new adventures,
                            wrapped in the warmth of timeless tales.
                        </p>
                        <Link
                            to={"/login"}
                            className="flex gap-2 hover:brightness-90 place-items-center cartoon-shadow text-gray-900 bg-primary w-fit rounded p-2"
                        >
                            Join now <BsStars color="var(--accent)"/>
                        </Link>
                    </div>
                </div>
                <FeaturesList />
            </div>
        </>
    );
};

export default Header;
