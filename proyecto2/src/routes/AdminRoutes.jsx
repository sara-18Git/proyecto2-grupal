import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoutes = () => {
  //  buscar si hay un usuario en session

  const user = JSON.parse(sessionStorage.getItem("usuario")) || null;
  console.log(user);
  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AdminRoutes;
