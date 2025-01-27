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
        <div className="home_wrapper flex flex-col min-h-screen pb-24 overflow-hidden">
            <Navbar />
            <div className=" top-0 z-10 flex flex-col">
                <Header />
            </div>
            {/* Main Content */}
            <Flex className="page_content mt-10 flex flex-col gap-16 px-4">
                <FeaturesList />
                <TomeTrackerBox />
                <Genres />
                <div className="about relative mx-auto md:w-2/3 rounded border border-secondary h-fit">
                    <div className="content p-8 flex flex-col gap-2">
                        <h2 className="text-2xl heading">About TomeTracker</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Inventore alias debitis id est nobis officiis
                            at sint, aliquid illo temporibus corrupti ex amet
                            tempore ullam optio cupiditate aspernatur modi ipsa?
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Laborum inventore, sed commodi libero natus
                            recusandae culpa suscipit ratione nemo consequuntur
                            repudiandae animi, quidem ut, atque at unde
                            dignissimos voluptatem debitis?
                        </p>
                    </div>
                </div>
                <div className="booksBox relative mx-auto md:w-2/3 rounded bg-gradient-to-b from-secondary h-60">
                    <img
                        src="src/assets/img/bookShelf.png"
                        className="booksImg lg:w-2/5 md:1/3 w-96 absolute ml-4 z-10"
                    />
                    <h2 className="float-right md:p-10 p-4 text-2xl inline z-50">
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
