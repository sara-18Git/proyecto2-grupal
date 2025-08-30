import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import Swal from "sweetalert2/dist/sweetalert2.js";
import LogoNav from "../assets/logo.png";

const Header = () => {
  const navegacion = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("usuario")) || null;
  function logout() {
    Swal.fire({
      title: "Estas seguro de cerrar sesion?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sesion cerrada!",
          icon: "success",
        });
        sessionStorage.removeItem("usuario");
        navegacion("/");
      }
    });
  }

  return (
    <div>
      <header>
        <nav>
          <Navbar fixed="top" className="custom-navbar">
            {/* fixed o sticky="top"  */}
            <Container className="custom-navbar">
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

                {user ? (
                  <>
                    <Nav.Link as={NavLink} to="/admin">
                      <div className="my-icon mb-0">
                        {" "}
                        <IoIosContacts className="icono-detaills" /> Admin
                      </div>
                    </Nav.Link>

                    <Button variant="danger" onClick={logout}>
                      Cerrar sesion
                    </Button>
                  </>
                ) : (
                  <>
                    {" "}
                    <Nav.Link as={NavLink} to="/login">
                      <div className="my-icon">
                        <FaSignInAlt className="icono-detaills" />
                        <span>Login</span>
                      </div>
                    </Nav.Link>
                  </>
                )}

                <Nav.Link as={NavLink} to="/team">
                  <p className="my-icon mb-0">Nosotros</p>
                </Nav.Link>

                <Nav.Link as={NavLink} to="/contact">
                  <p className="my-icon mb-0">Contactos</p>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </nav>
      </header>
    </div>
  );
};

export default Header;
