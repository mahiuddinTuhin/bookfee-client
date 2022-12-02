import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../allContext/MyContext";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
const DashBoardLayout = () => {
  const { loggedInUser } = useContext(UserContext);

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

            {loggedInUser?.role === "admin" ? (
              <li>
                <Link to="/dashboard/alluser">All User</Link>
              </li>
            ) : null}
            {loggedInUser?.role === "admin" ? (
              <li>
                <Link to="/dashboard/allseller">All Seller</Link>
              </li>
            ) : null}
            {loggedInUser?.role === "admin" ? (
              <li>
                <Link to="/dashboard/allbuyer">All Buyer</Link>
              </li>
            ) : null}
            {loggedInUser?.userType === "buyer" ? (
              <li>
                <Link to="/dashboard/myOrders">My Orders</Link>
              </li>
            ) : null}
            {loggedInUser?.userType === "seller" ? (
              <li>
                <Link to="/dashboard/addproducts">Add Products</Link>
              </li>
            ) : null}
            {loggedInUser?.userType === "seller" ? (
              <li>
                <Link to="/dashboard/myBuyers">My Buyers</Link>
              </li>
            ) : null}
            {loggedInUser?.userType === "seller" ? (
              <li>
                <Link to="/dashboard/myproducts">My Products</Link>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoardLayout;
