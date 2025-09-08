import React from "react";
import "./css/footer.css";
import LogoNav from "../assets/logo.png";
export default function Footer() {
  return (
    <div>
      <footer className="footer-container">
        <div className="grupo-1">
          <div className="box">
            <figure>
              <a href="#">
                <img
                  width="180"
                  src={LogoNav}
                  alt="logo de GameHub"
                  className="footer-logo"
                />
              </a>
            </figure>
          </div>

          <div className="box">
            <h2>INFORMACIÓN</h2>
            <nav>
              <ul>
                <li>
                  <a href="#">Inicio</a>
                </li>
                <li>
                  <a href="#">Juegos</a>
                </li>
                <li>
                  <a href="#">Sobre Nosotros</a>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="box">
            <h2>SÍGUENOS</h2>
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
                  alt="twitterx--v2"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="grupo-2">
          <small>
            &copy;2025 <b>GameHub</b> - Todos los Derechos Reservados.
          </small>
        </div>
      </footer>
    </div>
  );
}
