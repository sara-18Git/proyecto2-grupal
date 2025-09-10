import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button, Form } from "react-bootstrap";
import { FaSignInAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2/dist/sweetalert2.js";
import LogoNav from "../assets/logo.png";
import "../components/css/header.css";

const Header = () => {
  const navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("usuario")) || null;
  function logout() {
    Swal.fire({
      title: "Estas seguro de cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Salir",
      iconColor: "#042550ff",
      confirmButtonColor: "#042550ff",
      cancelButtonColor: "#d33",
      customClass: {
        popup: "small-alert",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sesión cerrada!",
          icon: "success",
          iconColor: "#042550ff",
          confirmButtonColor: "#042550ff",
          cancelButtonColor: "#d33",
          customClass: {
            popup: "small-alert",
          },
        });
        sessionStorage.removeItem("usuario");
        navigate("/");
      }
    });
  }

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="custom-navbar">
      <Container className="custom-navbar d-flex align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <Nav.Link as={NavLink} to="/">
            <img src={LogoNav} alt="Logo de GameHub" className="logo-nav" />
          </Nav.Link>
        </div>

        <div className="ms-auto">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="toggle-blanco"
          />
        </div>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-end ">
            <Nav.Link as={NavLink} to="/team">
              <p className="my-icon mb-0">Nosotros</p>
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact">
              <p className="my-icon mb-0">Contactos</p>
            </Nav.Link>

            {user ? (
              <>
                {user.email === "saraabigailrobles9@gmail.com" && (
                  <Nav.Link as={NavLink} to="/admin">
                    <div className="my-icon mb-0">
                      <FaUserShield className="icono-detaills" /> Admin
                    </div>
                  </Nav.Link>
                )}
                <Button variant="danger" onClick={logout}>
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login">
                  <div className="my-icon">
                    <FaSignInAlt className="icono-detaills" />
                    <span>Login</span>
                  </div>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
