import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import {
  obtenerUsuariosDeLocalStorage,
  guardarEnLocalStorage,
} from "../../utils/localStorage.users";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
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
    if (usuario) {
      Swal.fire({
        icon: "question",
        title: "Olvidaste tu contraseña?..",
        text: "El usuario ya existe en la base de datos",
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

    try {
      if (data.password != data.confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Las contraseñas deben ser iguales!",
          text: "Intenta nuevamente",
          iconColor: "#042550ff",
          confirmButtonColor: "#042550ff",
          cancelButtonColor: "#d33",
          customClass: {
            popup: "small-alert",
          },
        });
        return;
      }

      const nuevoUsuario = {
        id: Date.now(),
        nombreUsuario: data.userName,
        email: data.email,
        password: data.password,
        createdAt: new Date().toISOString(),
      };
      console.log(nuevoUsuario);

      const usuariosDeLocalStorage = obtenerUsuariosDeLocalStorage();
      console.log(usuariosDeLocalStorage);
      guardarEnLocalStorage([...usuariosDeLocalStorage, nuevoUsuario]);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "El formulario ha sido enviado",
        showConfirmButton: false,
        iconColor: "#042550ff",
        confirmButtonColor: "#042550ff",
        cancelButtonColor: "#d33",
        customClass: {
          popup: "small-alert",
        },
        timer: 1500,
      });
      reset();
      navegacion("/");
    } catch (error) {
      Swal.fire({
        title: "Error al registrar usuario",
        icon: "error",
        iconColor: "#042550ff",
        confirmButtonColor: "#042550ff",
        cancelButtonColor: "#d33",
        customClass: {
          popup: "small-alert",
        },
      });
      console.error(error);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="label mb-3" controlId="formUserName">
        <Form.Label>Nombre de Usuario</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su nombre de usuario"
          isInvalid={errors.userName}
          isValid={!errors.userName}
          {...register("userName", {
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
          {errors.userName?.message}
        </Form.Control.Feedback>
      </Form.Group>

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

      <Form.Group className="label mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su contraseña"
          isInvalid={errors.password}
          isValid={!errors.password}
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

      <Form.Group className="label mb-3" controlId="formConfirmPassword">
        <Form.Label>Confirmar contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirme su contraseña"
          isInvalid={errors.confirmPassword}
          isValid={!errors.confirmPassword}
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

      <div className="text-center mt-5 d-flex flex-column justify-content-center gap-2 flex-md-row">
        <Button className="forms-boton " type="submit">
          Enviar
        </Button>

        <Button className="forms-boton" onClick={handleGoHome}>
          <>Cancelar</>
        </Button>
      </div>
    </Form>
  );
};

export default FormRegister;
