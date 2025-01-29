import Home from "./pages/Home/Home";
import Login_Page from "./pages/UserHandler/Login";
import Register_Page from "./pages/UserHandler/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserShelf from "./pages/UserShelf/UserShelf";
import { ConfigProvider } from "antd";
import BookPage from "./pages/BookPage.tsx/BookPage";
import Footer from "./components/Footer/Footer";
import Library from "./pages/Library/Library";
import { AuthProvider } from "./components/Auth/AuthProvider";
import { ProtectedRoute } from "./components/Auth/ProtectedRoute";

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
        element: (
            <ProtectedRoute>
                <UserShelf />
            </ProtectedRoute>
        ),
    },
    {
        path: "/book/:bookname",
        element: <BookPage />,
    },
    {
        path: "/library",
        element: <Library />,
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
                        fontFamily: "Archivo",
                    },
                    components: {
                        Modal: {},
                    },
                }}
            >
                <AuthProvider>
                    <div className="app-container overflow-hidden">
                        <main className="content min-h-screen">
                            <RouterProvider router={router} />
                        </main>
                        <Footer />
                    </div>
                </AuthProvider>
            </ConfigProvider>
        </>
    );
}

export default App;
