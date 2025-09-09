import React from "react";
import "./css/footer.css";
import LogoNav from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { FaHome, FaGamepad } from "react-icons/fa";
import "../components/header.css";

export default function Footer() {
  return (
    <div>
      <footer className="custom-footer">
        <div className="grupo-1">
          <div className="box">
                <Nav.Link as={NavLink} to="/">
                  <img src={LogoNav} alt="Logo de GameHub" className="logo-nav" />
                </Nav.Link>
      
          </div>

          <div className="box">
            <h2>Información</h2>
            <ul className="footer-nav-list">
              <li>
                <Nav.Link as={NavLink} to="/">
                  <div className="my-icon">
                    <FaHome color="#8FB7CD" />
                    Inicio
                  </div>
                </Nav.Link>
              </li>

              <li>
                <Nav.Link as={NavLink} to="/">
                  <div className="my-icon">
                    <FaGamepad color="#8FB7CD" />
                    Juegos
                  </div>
                </Nav.Link>
              </li>

              <li>
                <Nav.Link as={NavLink} to="/team">
                  <p className="my-icon mb-0">Sobre Nosotros</p>
                </Nav.Link>
              </li>

              <li>
                <Nav.Link as={NavLink} to="/contact">
                  <p className="my-icon mb-0">Contactos</p>
                </Nav.Link>
              </li>
            </ul>
          </div>

          <div className="box">
            <h2>Seguinos</h2>
            <div className="red-social">
              <a
                href="https://www.facebook.com/index.php/?lang=es"
                aria-label="Facebook"
              >
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/3d-fluency/94/facebook-logo.png"
                  alt="facebook-logo"
                />
              </a>
              <a href="http://instagram.com/?hl=es" aria-label="Instagram">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/3d-fluency/94/instagram-logo.png"
                  alt="instagram-logo"
                />
              </a>
              <a href="https://x.com/" aria-label="Twitter/X">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/twitterx--v2.png"
                  className="social-icon"
                  alt="twitterx--v2"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="grupo-2">
          <small>
            &copy;2025 - <b>GameHub</b> - Todos los Derechos Reservados.
          </small>
        </div>
      </footer>
    </div>
  );
}
