import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { obtenerUsuariosDeLocalStorage } from "../../utils/localStorage.users";

const FormNewPass = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  function onSubmit(data) {
    const usuariosDeLaDb = obtenerUsuariosDeLocalStorage();
    const usuario = usuariosDeLaDb.find(
      (usuarioLS) => usuarioLS.email === data.email
    );

    if (!usuario) {
      Swal.fire({
        icon: "question",
        title: "El usuario no existe...",
        iconColor: "#042550ff",
        confirmButtonColor: "#042550ff",
        cancelButtonColor: "#d33",
        customClass: {
          popup: "small-alert",
        },
      });

      reset();
      return;
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "El formulario ha sido enviado",
      showConfirmButton: false,
      timer: 1500,
      iconColor: "#042550ff",
      confirmButtonColor: "#042550ff",
      cancelButtonColor: "#d33",
      customClass: {
        popup: "small-alert",
      },
    });

    reset();
    navigate("/");
  }

  return (
    
    <Form onSubmit={handleSubmit(onSubmit)} >
      <Form.Group className="label mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su correo electrónico"
          isInvalid={errors.email}
          {...register("email", {
            required: "El correo electrónico es requerido",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message:
                "El correo electrónico debe tener texto antes de la @ y, después de @, debe tener texto y . seguido de texto",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <div className="text-center mt-5">
        <Button className="forms-boton" type="submit">
          Enviar
        </Button>

        <Button className="forms-boton ms-4" onClick={handleGoHome}>
          Cancelar
        </Button>
      </div>
    </Form>
  );
};

export default FormNewPass;
