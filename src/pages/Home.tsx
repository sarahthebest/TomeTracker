import BookShelf from "../components/Shelves/BookShelf";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Home.css"

const Home = () => {
    return ( 
        <div className="home_wrapper flex flex-row">
            <Sidebar/>
            <BookShelf />
        </div>
     );
}
 
export default Home;