import React from "react";

import { Container } from "react-bootstrap";
import FormRegister from "../components/login/FormRegister";
import "../components/Header.css";
import FormNewPass from "../components/login/FormNewPass";

const NewPassPage = () => {
  return (
    <>
      <h1 className="titulos-form">Recuperar contraseña </h1>
      <Container className="custom-form border rounded p-4 w-50 mb-5">
        <FormNewPass></FormNewPass>
      </Container>
    </>
  );
};

export default NewPassPage;
