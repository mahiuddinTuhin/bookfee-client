import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "../Components/PrivateRoute/AdminRoute";
import BuyerRoute from "../Components/PrivateRoute/BuyerRoute";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import SellerRoute from "../Components/PrivateRoute/SellerRoute";
import AddProducts from "../DashBoardLayout/AddProducts/AddProducts";
import Allbuyer from "../DashBoardLayout/Allbuyer/Allbuyer";
import Allseller from "../DashBoardLayout/Allseller/Allseller";
import AllBooks from "../DashBoardLayout/Alluser/AllBooks";
import Alluser from "../DashBoardLayout/Alluser/Alluser";
import MyOrders from "../DashBoardLayout/Alluser/MyOrders/MyOrders";
import DashBoardLayout from "../DashBoardLayout/DashBoardLayout";
import MyBuyers from "../DashBoardLayout/MyBuyers/MyBuyers";
import MyProducts from "../DashBoardLayout/MyProducts/MyProducts";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Error404 from "../Pages/404/Error404";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import { Signup } from "../Pages/Login/Signup";
import Profile from "../Pages/Profile/Profile";
import SingleCategory from "../Pages/SingleCategory/SingleCategory";
import Test from "../Pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <SingleCategory />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(
            `https://bookfee-server.vercel.app/category/${params.id}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            }
          );
        },
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>{" "}
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/dashboard/alluser",
        element: (
          <AdminRoute>
            <Alluser></Alluser>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allseller",
        element: (
          <AdminRoute>
            <Allseller></Allseller>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbuyer",
        element: (
          <AdminRoute>
            <Allbuyer></Allbuyer>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/myOrders",
        element: (
          <BuyerRoute>
            <MyOrders></MyOrders>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/addProducts",
        element: (
          <SellerRoute>
            <AddProducts></AddProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/mybuyers",
        element: (
          <SellerRoute>
            <MyBuyers />
          </SellerRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <Error404 />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);
export default router;
