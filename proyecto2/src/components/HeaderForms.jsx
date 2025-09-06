import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import LogoNav from "../assets/logo.png";
import "../components/header.css";

const HeaderForms = () => {
  return (
    <Navbar sticky="top" className="custom-navbar" data-bs-theme="dark">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Bloque izquierdo: logo y título */}
        <div className="d-flex align-items-center">
          <Nav.Link as={NavLink} to="/">
            <img src={LogoNav} alt="Logo de GameHub" className="logo-nav" />
          </Nav.Link>
          {/* <Navbar.Brand className="titulo-pagina ms-2">Game Hub</Navbar.Brand> */}
        </div>

        {/* Ícono Home alineado a la derecha */}
        <Nav.Link as={NavLink} to="/">
          <FaHome className="icono-detaills" />
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default HeaderForms;
