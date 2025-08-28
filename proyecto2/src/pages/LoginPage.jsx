import React from "react";
import FormLogin from "../components/login/FormLogin";
import { Container } from "react-bootstrap";


const LoginPage = () => {
  

  return (
    <>
      <h1 className="text-center py-3 text-primary">Iniciar Sesion</h1>
      <Container className="border rounded p-4 bg-primary w-50">
        <FormLogin></FormLogin>
      </Container>
    </>
  );
};

export default LoginPage;
