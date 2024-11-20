import { useNavigate } from "react-router-dom";
import FeaturesList from "./FeatureBox/FeatureBox";
import "./Header.css";
import { BsStars } from "react-icons/bs";
import Btn from "../Atoms/Btn";

const Header = () => {
    const navigate = useNavigate();
    const handleNavigate = (path: string) => {
        navigate(path);
    };
    return (
        <>
            <div className="header px-4 flex flex-col gap-4 mb-4 p-4 absolute pt-20">
                <div className="headerContent flex flex-row place-content-center">
                    <img
                        className="w-1/4"
                        src="src/assets/img/reading.svg"
                        alt="Illustration from undraw.co"
                    />
                    <div className="content w-2/5 ">
                        <h1 className="huge heading font-bold text-pop">
                            TomeTracker
                        </h1>
                        <p className="light mb-4 ">
                            Wander through stories, find magic in every page,
                            and let each book lead you to new adventures,
                            wrapped in the warmth of timeless tales.
                        </p>
                        <Btn
                            onClick={() => handleNavigate("/login")}
                            size="large"
                            text="Join now"
                            icon={<BsStars color="var(--pop)" />}
                        />
                    </div>
                </div>
                <FeaturesList />
            </div>
        </>
    );
};

export default Header;
