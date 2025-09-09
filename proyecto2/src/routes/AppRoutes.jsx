import React from "react";
import { Routes, Route, NavLink, Router } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import Error404Page from "../pages/Error404Page";
import AdminRoutes from "./AdminRoutes";
import DetallesPage from "../pages/DetallesPage";
import RegisterPage from "../pages/RegisterPage";
import TeamPage from "../pages/TeamPage";

import LayoutConNav from "../layouts/LayoutConNav";
import LayoutNavForms from "../layouts/LayoutNavForms";
import NewPassPage from "../pages/NewPassPage";
import { BsNewspaper } from "react-icons/bs";
import ContactPage from "../pages/ContactPage";
import ScrollToTop from "../components/ScrollToTop";

const AppRoutes = () => {
  return (
    <>
    <ScrollToTop></ScrollToTop>
    <Routes>
      <Route element={<LayoutConNav></LayoutConNav>}>
        <Route path="/" element={<HomePage></HomePage>}></Route>

        {/* Rutas protegidas */}
        <Route element={<AdminRoutes></AdminRoutes>}>
          <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
        </Route>
      </Route>

      <Route element={<LayoutNavForms></LayoutNavForms>}>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>

        <Route
          path="/registrarse"
          element={<RegisterPage></RegisterPage>}
        ></Route>
        <Route path="/password" element={<NewPassPage></NewPassPage>}></Route>
        <Route path="/producto/:id" element={<DetallesPage />} />

        <Route path="/team" element={<TeamPage></TeamPage>}></Route>

        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>

        <Route path="*" element={<Error404Page></Error404Page>}></Route>
      </Route>
    </Routes>
    </>
    
  );
};

export default AppRoutes;
