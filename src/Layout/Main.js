import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Offer from "../shared/Offer/Offer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Offer />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
