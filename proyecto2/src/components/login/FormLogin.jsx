import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { obtenerUsuariosDeLocalStorage } from "../../utils/localStorage.users";

const formLogin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navegate = useNavigate();

  const handleGoRegister = () => {
    navegate("/registrarse");
  };

  function onSubmit(data) {
    console.log(data);

    const usuariosDeLaDb = obtenerUsuariosDeLocalStorage();
    const usuario = usuariosDeLaDb.find(
      (usuarioLS) => usuarioLS.email === data.email
    );

    console.log(usuario);
    if (!usuario) {
      Swal.fire({
        icon: "error",
        title: "Resgistrate!",
        text: "El usuario no existe en la base de datos",
      });
      return;
    }
    if (usuario.password != data.password) {
      Swal.fire({
        icon: "warning",
        title: "Contraseña incorrecta",
        text: "Despues de tres intento incorrectos se bloqueara el usuario",
      });
      return;
    }

    if (data.email === "amelie@gmail.com") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El usuario no existe en la base de datos",
      });
      return;
    }
    const usuarioLogueado = {
      email: data.email,
      loginAt: new Date().toISOString(),
    };
    sessionStorage.setItem("usuario", JSON.stringify(usuarioLogueado));

    Swal.fire({
      title: "Usuario Logueado",
      icon: "success",
      draggable: true,
    });
    reset();
    navegate("/");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su email"
          isInvalid={errors.email}
          {...register("email", {
            required: "El email es requerido",
            // Esta expresion regular evalua que sea un email valido
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Debe ingresar un email válido",
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
          {...register("password", { required: "El password es requerido" })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <div className="text-center mt-5">
        <Button className="detalles-boton" type="submit">
          Iniciar Sesion
        </Button>

        <Button className="detalles-boton ms-4" onClick={handleGoRegister} >
          <>Registrarse</>
        </Button>
      </div>
    </Form>
  );
};

export default formLogin;
