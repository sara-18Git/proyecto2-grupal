import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      nombre: "",
      apellido: "",
      dni: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const navegacion = useNavigate();

  function onSubmit(data) {
    console.log(data);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "El formulario ha sido enviado",
      showConfirmButton: false,
      timer: 1500,
    });

    // Swal.fire("El formulario ha sido enviado!");
    reset();
    navegacion("/");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre de Usuario</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrse su nombre de usuario"
          isInvalid={errors.nombre}
          {...register("nombre", {
            required: "El nombre de usuario es requerido",

            pattern: {
              value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/,
              message: "Solo se permiten letras",
            },
            maxLength: {
              value: 30,
              message: "El nombre no puede tener más de 30 caracteres",
            },

            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres message",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.nombre?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="Apellido"
          isInvalid={errors.apellido}
          {...register("apellido", {
            required: "El apellido es requerido",

            pattern: {
              value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/,
              message: "Solo se permiten letras",
            },
            maxLength: {
              value: 30,
              message: "El nombre no puede tener más de 30 caracteres",
            },

            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres message",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.apellido?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>DNI</Form.Label>
        <Form.Control
          type="text"
          placeholder="Documento nacional de identidad"
          isInvalid={errors.dni}
          {...register("dni", {
            required: "El documento es requerido",
            pattern: {
              value: /^[0-9]+$/,
              message: "Solo se permiten números",
            },
            minLength: {
              value: 7,
              message: "El DNI debe tener al menos 7 dígitos",
            },
            maxLength: {
              value: 8,
              message: "El DNI no puede tener más de 8 dígitos",
            },
          })}
        />

        <Form.Control.Feedback type="invalid">
          {errors.dni?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Correo electronico"
          isInvalid={errors.email}
          {...register("email", {
            required: "El correo electronico es requerido",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message:
                "El mail debe tener texto antes de la @ y, despues de  @,  debe tener texto y . seguido de texto",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su contraseña"
          isInvalid={errors.password}
          {...register("password", {
            required: "La contraseñia es un campo requerido",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?]).{8,}$/,
              message:
                "La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, una minúscula, un número y un carácter especial.",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirmar contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirme su contraseña"
          isInvalid={errors.confirmPassword}
          {...register("confirmPassword", {
            required: "Confirmar la contraseña es requerido",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?]).{8,}$/,
              message:
                "La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, una minúscula, un número y un carácter especial.",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.confirmPassword?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default FormRegister;
