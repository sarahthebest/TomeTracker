import "./Home.css";
import CookieConsent from "../../components/Cookies/CookieConsent";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {


    return (
        <div className="home_wrapper flex flex-col relative">
            <Navbar />
            <Header />
            <CookieConsent />
        </div>
    );
};

export default Home;
