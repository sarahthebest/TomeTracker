import "./Home.css";
import CookieConsent from "../../components/Cookies/CookieConsent";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import TomeTrackerBox from "../../components/StartPage/TomeTrackerBox";
import FeaturesList from "../../components/Header/FeatureBox/FeatureBox";
import Genres from "../../components/StartPage/Genres";
import { Flex } from "antd";
import CloudinaryImage from "../../components/Atoms/CloudinaryImg";
import Marquee from "./Marquee";

const Home = () => {
    return (
        <div className="home_wrapper flex flex-col min-h-screen pb-16 md:pb-20 overflow-hidden">
            <Navbar />
            <div className="top-0 z-10 flex flex-col mb-36">
                <Header />
            </div>
            <Marquee />
            {/* Main Content */}
            <Flex className="page_content mt-24 flex flex-col gap-24 px-4 md:px-0">
                <FeaturesList />
                <TomeTrackerBox />
                <Genres />
                <div className="about relative mx-auto md:w-2/3 mb-4">
                    <div className="content flex flex-col gap-2 text-center">
                        <h2 className="text-2xl heading">About TomeTracker</h2>
                        <p className="leading-6">
                            TomeTracker is a project I built to enhance my
                            full-stack skills. Developed using TypeScript and
                            React with Vite, it features a Node.js Express
                            backend deployed on Firebase, with MongoDB as the
                            database. Static images are hosted on Cloudinary.
                            The site was created as a fun challenge to learn and
                            improve, and you can find more about me{" "}
                            <span className="italic underline">
                                <a
                                    href="https://emmoth.me/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    here
                                </a>
                            </span>
                            .
                        </p>
                    </div>
                </div>
                <div className="booksBox h-fit flex flex-col relative place-items-center mx-auto md:w-2/3">
                    <CloudinaryImage
                        publicId={"books_1_zkmiww"}
                        className="booksImg lg:w-3/5 md:1/3 w-96 ml-4 z-10"
                    />
                    <h2 className="text-center p-4 text-2xl">
                        Collect all of your favorite books
                        <br /> in one place.
                    </h2>
                </div>
            </Flex>
            <CookieConsent />
        </div>
    );
};

export default Home;
