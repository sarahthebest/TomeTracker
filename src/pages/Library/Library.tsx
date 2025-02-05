import { Flex } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import Bg from "../../components/Common/Bg";
import CookieConsent from "../../components/Cookies/CookieConsent";

const Library = () => {
    return ( 
        <div className="shelf flex flex-col min-h-screen pb-16 md:pb-20 overflow-hidden">
            <Navbar />
            <Bg />
            <Flex className="mx-auto md:w-2/3 bg-red-950 z-50 mt-20">
                <h2 className="text-2xl">Popular books</h2>
                <div className="flex flex-row"></div>
            </Flex>
            <Flex className="mx-auto md:w-2/3 bg-red-950 z-50 mt-20">
                <h2 className="text-2xl">Romance books</h2>
                <div className="flex flex-row"></div>
            </Flex>            <Flex className="mx-auto md:w-2/3 bg-red-950 z-50 mt-20">
                <h2 className="text-2xl">Fantasy books</h2>
                <div className="flex flex-row"></div>
            </Flex>
            <CookieConsent />
        </div>
     );
}
 
export default Library;