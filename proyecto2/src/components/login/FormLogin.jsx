import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
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

  const handleNewPassword = () => {
    Swal.fire({
      icon: "success",
      iconColor: "#042550ff",
      title: "¡Listo!",
      text: "Tu contraseña está en proceso de ser recuperada",
      confirmButtonColor: "#042550ff",
      cancelButtonColor: "#d33",
    });
    navegate("/");
    // navegate("/reset");
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
    if (usuario.password != data.password) {
      Swal.fire({
        icon: "warning",
        title: "Contraseña incorrecta",
        text: "Despues de tres intento incorrectos se bloqueara el usuario",
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
    const usuarioLogueado = {
      email: data.email,
      loginAt: new Date().toISOString(),
    };
    sessionStorage.setItem("usuario", JSON.stringify(usuarioLogueado));

    Swal.fire({
      title: "Usuario Logueado",
      icon: "success",
      draggable: true,
      iconColor: "#042550ff",
      confirmButtonColor: "#042550ff",
      cancelButtonColor: "#d33",
      customClass: {
        popup: "small-alert",
      },
    });
    reset();
    navegate("/");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="label mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
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

      <Form.Group className="label mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su contraseña"
          isInvalid={errors.password}
          {...register("password", {
            required: "El password es requerido",
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

      <div className="text-center mt-5 d-flex flex-column justify-content-center gap-2 flex-md-row">
        <Button className="forms-boton mt-3" type="submit">
          Iniciar Sesion
        </Button>

        <Button className="forms-boton mt-3" onClick={handleGoRegister}>
          <>Registrarse</>
        </Button>
      </div>
    </Form>
  );
};

export default formLogin;
