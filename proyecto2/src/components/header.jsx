import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import Swal from "sweetalert2/dist/sweetalert2.js";

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
          <Navbar sticky="top" className="custom-navbar" data-bs-theme="dark">

          {/* </Navbar><Navbar sticky="top" bg="dark" data-bs-theme="dark"> */}
            <Container>
              <Navbar.Brand as={NavLink} to="/">
                <p className="my-icon text-white mb-0">Logo</p>
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">
                  <div className="my-icon">
                    {" "}
                    <FaHome color="green" />
                    Inicio
                  </div>
                </Nav.Link>

                {user ? (
                  <>
                    <Nav.Link as={NavLink} to="/admin">
                      <div className="my-icon text-white mb-0">
                        {" "}
                        <IoIosContacts color="orange" /> Admin
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
                        <FaSignInAlt color="blue" />
                        <span>Login</span>
                      </div>
                    </Nav.Link>
                  </>
                )}

                <Nav.Link as={NavLink} to="/team">
                  <p className="my-icon text-white mb-0">Nosotros</p>
                </Nav.Link>

                <Nav.Link as={NavLink} to="/contact">
                  <p className="my-icon text-white mb-0">Contactos</p>
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
