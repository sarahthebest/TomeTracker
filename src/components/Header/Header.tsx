import { useNavigate } from "react-router-dom";
import "./Header.css";
import { BsStars } from "react-icons/bs";
import Btn from "../Atoms/Btn";
import { Flex } from "antd";

const Header = () => {
    const navigate = useNavigate();
    const handleNavigate = (path: string) => {
        navigate(path);
    };

    return (
        <>
            <div className="header px-4 flex flex-col gap-4 mb-4 relative w-full pt-10 md:pt-28 bg-gradient-to-b  from-primary">
                <Flex
                    className="headerContent gap-0 md:gap-36 flex flex-col text-center md:text-left align-center  
                md:flex-row w-full relative align-center"
                >
                    <img
                        src="src/assets/img/group.png"
                        alt=""
                        className="w-96 md:w-1/3 mx-auto md:mx-0"
                    />

                    <div className="content w-fit max-w-min align-center mx-auto md:mx-0">
                        <h1 className="huge heading font-bold text-pop">
                            TomeTracker
                        </h1>
                        <p className="light mb-4">
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
                </Flex>
            </div>
        </>
    );
};

export default Header;
