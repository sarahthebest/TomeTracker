import Btn from "../Atoms/Btn";
import FeaturesList from "./FeatureBok/FeatureBox";
import "./Header.css";
import { BsStars } from "react-icons/bs";

const Header = () => {
    return (
        <>
            <div className="header px-4 flex flex-col gap-2 mb-4 p-4 absolute pt-20">
                <div className="headerContent flex flex-row place-content-center">
                    <img
                        className="w-1/4"
                        src="src/assets/reading.svg"
                        alt="Illustration from undraw.co"
                    />
                    <div className="content w-2/5">
                        <h1 className="huge medium font-bold">TomeTracker</h1>
                        <p className="light mb-4">
                            Wander through stories, find magic in every page,
                            and let each book lead you to new adventures,
                            wrapped in the warmth of timeless tales.
                        </p>
                        <Btn
                            onClick={function (): void {
                                throw new Error("Function not implemented.");
                            }}
                            text={"Join Now"}
                            icon={<BsStars />}
                        />
                    </div>
                </div>
                <FeaturesList />
            </div>
        </>
    );
};

export default Header;
