import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoutes = () => {
  //  buscar si hay un usuario en session

  const user = JSON.parse(sessionStorage.getItem("usuario")) || null;
  console.log(user.email);
  if (user === "admin@gmail.com") {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default AdminRoutes;
