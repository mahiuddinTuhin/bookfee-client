import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Error404 from "../Pages/404/Error404";
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
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
      },
    ],
  },
  {
    path: "/*",
    element: <Error404 />,
  },
]);
export default router;
