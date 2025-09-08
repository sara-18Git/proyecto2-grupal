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
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const navegate = useNavigate();

  const handleGoHome = () => {
    navegate("/");
  };

  const navegacion = useNavigate();

  function onSubmit(data) {
    console.log(data);

    const usuariosDeLaDb = obtenerUsuariosDeLocalStorage();
    const usuario = usuariosDeLaDb.find(
      (usuarioLS) => usuarioLS.email === data.email
    );

    console.log(usuario);
    if (!usuario) {
      Swal.fire({
        icon: "question",
        title: "El usuario no existe..",
        text: "Queres registrarte?",
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
    navegacion("/");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="label mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su correo electronico"
          isInvalid={errors.email}
          isValid={!errors.email}
          {...register("email", {
            required: "El correo electronico es requerido",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message:
                "El correo electronico debe tener texto antes de la @ y, despues de  @,  debe tener texto y . seguido de texto",
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
          <>Cancelar</>
        </Button>
      </div>
    </Form>
  );
};

export default FormNewPass;
