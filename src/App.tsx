import Home from "./pages/Home/Home";
import Login_Page from "./pages/Login/Login";
import Register_Page from "./pages/Register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserShelf from "./pages/UserShelf/UserShelf";
import { ConfigProvider } from "antd";
import BookPage from "./pages/BookPage.tsx/BookPage";
import Footer from "./components/Footer/Footer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login_Page />,
    },
    {
        path: "/register",
        element: <Register_Page />,
    },
    {
        path: "/shelves",
        element: <UserShelf />,
    },
    {
        path: "/book/:bookname",
        element: <BookPage />,
    },
]);

function App() {
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimaryHover: "var(--pop)",
                        colorPrimaryTextHover: "var(--accent)",
                        colorPrimary: "var(--primary)",
                        colorLinkHover: "var(--accent)",
                        colorBorder: "var(--border)",
                        colorPrimaryActive: "var(--accent)",
                        colorBgContainer: "var(--input)",
                    },
                    components: {
                        Modal: {

                        },
                    },
                }}
            >
                <div className="app-container">
                    <main className="content min-h-screen">
                        <RouterProvider router={router} />
                    </main>
                    <Footer />
                </div>
            </ConfigProvider>
        </>
    );
}

export default App;
