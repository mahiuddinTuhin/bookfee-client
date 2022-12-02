import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../allContext/MyContext";
import Loading from "../Loading/Loading";

const BuyerRoute = ({ children }) => {
  const { loggedInUser, loading } = useContext(UserContext);
  if (loading) return <Loading />;

  if (loggedInUser?.userType !== "buyer") <Navigate to="/" />;

  return children;
};

export default BuyerRoute;
