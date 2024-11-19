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
                    components: {
                        Button: {
                            defaultHoverBorderColor: "var(--pop)",
                            defaultHoverColor: "var(--pop)",
                            defaultBorderColor:"var(--border)",
                            defaultColor:"var(--text)"
                        },
                    },
                }}
            >
                <RouterProvider router={router} />
            </ConfigProvider>
        </>
    );
}

export default App;
