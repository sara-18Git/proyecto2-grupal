import React from "react";
import { Routes, Route, NavLink, Router } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import Error404Page from "../pages/Error404Page";
import AdminRoutes from "./AdminRoutes";

import RegisterPage from "../pages/RegisterPage";
import TeamPage from "../pages/TeamPage";
import ContactPage from "../pages/ContactPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>

      {/* Rutas protegidas */}
      <Route element={<AdminRoutes></AdminRoutes>}>
        <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
      </Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>

      <Route
        path="/registrarse"
        element={<RegisterPage></RegisterPage>}
      ></Route>

      <Route path="/team" element={<TeamPage></TeamPage>}></Route>

      <Route path="/contact" element={<ContactPage></ContactPage>}></Route>

      <Route path="*" element={<Error404Page></Error404Page>}></Route>
    </Routes>
  );
};

export default AppRoutes;
