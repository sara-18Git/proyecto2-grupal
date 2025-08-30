import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const LayoutConNav = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default LayoutConNav;
