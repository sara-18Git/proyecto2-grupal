import React from "react";
//import FormRegister from "../components/login/FormRegister";
import { Container } from "react-bootstrap";
import FormRegister from "../components/login/FormRegister";
import "../components/Header.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <h1 className="titulos-form">Registrarse </h1>
      <Container className="custom-form border rounded p-4 w-50">
        <FormRegister></FormRegister>
        <div className="mt-4 text-center">
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

export default RegisterPage;
