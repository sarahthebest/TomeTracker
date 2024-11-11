import { SavedBooks } from "../hooks/custom_hooks";
import BookShelf from "../components/Shelves/BookShelf";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
    const [books] = SavedBooks();
    return (
        <div className="home_wrapper flex flex-row">
            <Sidebar />
            <BookShelf books={books}/>
        </div>
    );
};

export default Home;
