import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import { Home } from "./pages/home/Home";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
// import { Products } from "./pages/products/Products";
import Register from "./pages/register/Register";
import User from "./pages/user/User";
import { Users } from "./pages/users/Users";
import "./styles/global.scss";
import ComingSoon from "./pages/comingsoon/ComingSoon";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/users/:userId",
          element: <User />,
        },
        {
          path: "/products",
          element: <ComingSoon />,
        },
        {
          path: "/elements",
          element: <ComingSoon />,
        },
        {
          path: "/orders",
          element: <ComingSoon />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/homepage",
          element: <ComingSoon />,
        },
        {
          path: "/notes",
          element: <ComingSoon />,
        },
        {
          path: "/forms",
          element: <ComingSoon />,
        },
        {
          path: "/calendar",
          element: <ComingSoon />,
        },

        {
          path: "/settings",
          element: <ComingSoon />,
        },
        {
          path: "/backups",
          element: <ComingSoon />,
        },
        {
          path: "/charts",
          element: <ComingSoon />,
        },
        {
          path: "/logs",
          element: <ComingSoon />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
