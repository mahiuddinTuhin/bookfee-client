import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../allContext/MyContext";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
const DashBoardLayout = () => {
  const { loggedInUser, setLoggedInUser, user } = useContext(UserContext);

  // getting current user
  useEffect(() => {
    fetch(`http://localhost:5000/currentUser/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoggedInUser(data);
        console.log(data);
      });
  }, [user?.email, setLoggedInUser]);
  console.log(loggedInUser);
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
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoardLayout;
