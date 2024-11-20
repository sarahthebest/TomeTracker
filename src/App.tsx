import Home from "./pages/Home/Home";
import Login_Page from "./pages/Login/Login";
import Register_Page from "./pages/Register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserShelf from "./pages/UserShelf/UserShelf";
import { ConfigProvider } from "antd";

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
]);

function App() {
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimaryHover: "var(--pop)",
                        colorPrimaryTextHover:"var(--accent)",
                        colorPrimary:"var(--primary)",
                        colorLinkHover:"var(--accent)",
                        colorBorder:"var(--border)",
                        colorPrimaryActive:"var(--accent)",
                        colorBgContainer:"var(--input)",
                    },
                    components: {
                        Modal: {
                            contentBg:"var(--pop)",
                        },
                    }
                }}
            >
                <RouterProvider router={router} />
            </ConfigProvider>
        </>
    );
}

export default App;
