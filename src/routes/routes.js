import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import AllBooks from "../DashBoardLayout/Alluser/AllBooks";
import Alluser from "../DashBoardLayout/Alluser/Alluser";
import DashBoardLayout from "../DashBoardLayout/DashBoardLayout";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Error404 from "../Pages/404/Error404";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import { Signup } from "../Pages/Login/Signup";
import Profile from "../Pages/Profile/Profile";
import SingleCategory from "../Pages/SingleCategory/SingleCategory";

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
          return fetch(`http://localhost:5000/category/${params.id}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
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
        element: <Alluser></Alluser>,
      },
    ],
  },
  {
    path: "/*",
    element: <Error404 />,
  },
]);
export default router;
