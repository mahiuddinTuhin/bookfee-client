import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../allContext/MyContext";
import Loading from "../Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, setLoading, loading } = useContext(UserContext);
  const location = useLocation();
  if (loading) return <Loading />;

  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
  return children;
};

export default PrivateRoute;
