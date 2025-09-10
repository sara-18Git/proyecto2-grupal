import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import LogoNav from "/logo.png";
import "../components/css/header.css";

const HeaderForms = () => {
  return (
    <Navbar sticky="top" className="custom-navbar" data-bs-theme="dark">
      <Container className="custom-navbar d-flex align-items-center">
        {/* Bloque izquierdo: logo y título */}
        <div className="d-flex align-items-center justify-content-start">
          <Nav.Link as={NavLink} to="/">
            <img src={LogoNav} alt="Logo de GameHub" className="logo-nav" />
          </Nav.Link>
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
