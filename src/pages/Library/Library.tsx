import { Flex } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import Bg from "../../components/Common/Bg";
import CookieConsent from "../../components/Cookies/CookieConsent";
import { Link } from "react-router-dom";
import Btn from "../../components/Atoms/Btn";

const Library = () => {
    
    return ( 
        <div className="shelf flex flex-col min-h-screen pb-16 md:pb-20 overflow-hidden">
            <Navbar />
            <Bg />
            <Flex><Btn text="" /></Flex>
            <Flex className="mx-auto md:w-2/3 bg-red-950 z-50 mt-20">
                <h2 className="text-2xl me-auto">Popular books</h2>
                <Link to={"/"}>View more</Link>
                <div className="flex flex-row"></div>
            </Flex>
            
            <CookieConsent />
        </div>
     );
}
 
export default Library;