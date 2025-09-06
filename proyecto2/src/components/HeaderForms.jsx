import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import LogoNav from "../assets/logo.png";
import "../components/header.css";

const HeaderForms = () => {
  return (
    <Navbar sticky="top" className="custom-navbar" data-bs-theme="dark">
      <Container className="custom-navbar">
        <div className="d-flex justify-content-center align-items-center">
          <Nav.Link as={NavLink} to="/">
            <img src={LogoNav} alt="Logo de GameHub" className="logo-nav" />
          </Nav.Link>

          <Navbar.Brand className="titulo-pagina text-start ms-0">
            Game Hub
          </Navbar.Brand>
          {/* <Nav.Link as={NavLink} to="/">
            <div className="my-icon">
              {" "}
              <FaHome className="icono-detaills" />
            </div>
          </Nav.Link> */}
        </div>

        <Nav></Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderForms;
