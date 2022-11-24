import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Home/Home";
import Offer from "../shared/Offer/Offer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Offer />
      <Outlet />
      <Home />
      <Footer />
    </div>
  );
};

export default Main;
