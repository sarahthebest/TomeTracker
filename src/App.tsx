import Home from "./pages/Home/Home";
import Login_Page from "./pages/Login/Login";
import Register_Page from "./pages/Register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
