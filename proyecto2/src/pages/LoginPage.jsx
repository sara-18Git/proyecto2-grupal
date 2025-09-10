import React from "react";
import FormLogin from "../components/login/FormLogin";
import { Container } from "react-bootstrap";
import "../components/css/header.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <h1 className="titulos-form">Iniciar Sesion</h1>
      <Container className="custom-form border rounded p-4 w-50 mb-5">
        <FormLogin></FormLogin>
        <div className="mt-4 text-center">
          <Link
            to="/password"
            className="fw-semibold"
            style={{ color: "#8FB7CD" }}
          >
            Recuperar contraseña?
          </Link>
          <div className="mt-2">
            <Link to="/" className="link-color text-decoration-none">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
