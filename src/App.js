import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/routes";

function App() {
  return (
    <div data-theme="dracula" className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
