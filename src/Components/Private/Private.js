import React from "react";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const auth = sessionStorage.getItem("userToken");
  return <div>{auth ? children : <Navigate to={"/login"} />}</div>;
};

export default Private;
{
}
