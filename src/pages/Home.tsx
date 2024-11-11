import Add_book from "../components/AddBook/AddBook";
import BookShelf from "../components/Shelves/BookShelf";

const Home = () => {
    return ( 
        <div className="home_wrapper ">
            <Add_book />
            <BookShelf />
        </div>
     );
}
 
export default Home;