import React from "react";
//import FormRegister from "../components/login/FormRegister";
import { Container } from "react-bootstrap";
import FormRegister from "../components/login/FormRegister";

const RegisterPage = () => {
  return (
    <>
    
     <h1 className="text-center py-3 text-primary">Registrarse </h1>
      <Container className="border rounded p-4 bg-secondary w-50">
           <FormRegister></FormRegister>
      </Container>
    </>
  );
};

export default RegisterPage;
