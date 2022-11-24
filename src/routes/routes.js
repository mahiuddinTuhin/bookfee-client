import { createBrowserRouter } from "react-router-dom";
import Carousel from "../Components/carousel/Carousel";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Carousel />,
      },
    ],
  },
]);
export default router;
