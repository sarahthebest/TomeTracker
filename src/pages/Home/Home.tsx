import "./Home.css";
import CookieConsent from "../../components/Cookies/CookieConsent";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import TomeTrackerBox from "../../components/StartPage/TomeTrackerBox";
import FeaturesList from "../../components/Header/FeatureBox/FeatureBox";
import Genres from "../../components/StartPage/Genres";
import { Flex } from "antd";

const Home = () => {
    return (
        <div className="home_wrapper flex flex-col min-h-screen pb-20 overflow-hidden">
            <Navbar />
            <div className=" top-0 z-10 flex flex-col">
                <Header />
            </div>
            {/* Main Content */}
            <Flex className="page_content mt-10  flex flex-col gap-16 px-4 overflow-hidden">
                <FeaturesList />
                <TomeTrackerBox />
                <Genres />
            </Flex>
            <CookieConsent />
        </div>
    );
};

export default Home;
