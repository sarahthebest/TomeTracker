import CookieConsent from "./components/Cookies/CookieConsent";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <div className="window">
                <Home />
                <CookieConsent />
            </div>
        </>
    );
}

export default App;
