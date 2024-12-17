import { useNavigate } from "react-router-dom";
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
            <div className="header px-4 flex flex-col gap-4 mb-4 relative w-full pt-32 bg-gradient-to-b  from-primary">
                <div className="headerContent flex flex-row w-full relative">
                    <img src="src/assets/img/reading.svg" alt="" className="w-1/5"/>

                    <div className="content w-2/5 ml-10">
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
            </div>
        </>
    );
};

export default Header;
