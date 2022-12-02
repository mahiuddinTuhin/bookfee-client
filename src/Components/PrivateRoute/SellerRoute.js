import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../allContext/MyContext";
import Loading from "../Loading/Loading";

const SellerRoute = ({ children }) => {
  const { loggedInUser, loading } = useContext(UserContext);
  if (loading) return <Loading />;

  if (loggedInUser?.userType !== "seller") <Navigate to="/" />;

  return children;
};

export default SellerRoute;
