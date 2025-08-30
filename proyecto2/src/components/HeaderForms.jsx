import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import LogoNav from "../assets/logo.png";

const HeaderForms = () => {
  return (
    <div>
      <header>
        <nav>
          <Navbar fixed="top" className="custom-navbar" data-bs-theme="dark">
            <Container className="d-flex justify-content-between align-items-center">
              <Nav.Link as={NavLink} to="/">
                <img src={LogoNav} alt="Logo de GameHub" className="logo-nav" />
              </Nav.Link>

              <Nav>
                <Nav.Link as={NavLink} to="/">
                  <div className="my-icon">
                    {" "}
                    <FaHome className="icono-detaills" />
                  </div>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </nav>
      </header>
    </div>
  );
};

export default HeaderForms;
