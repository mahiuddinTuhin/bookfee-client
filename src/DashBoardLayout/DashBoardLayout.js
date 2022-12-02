import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
const DashBoardLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">All Books</Link>
            </li>
            <li>
              <Link to="/dashboard/alluser">All User</Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoardLayout;
