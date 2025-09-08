import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { agregarJuego, obtenerJuegos } from "../../services/juegos.services";


export default function CreateGameModal({ alCerrar, alGuardar }) {
  const [camposAdicionales, setCamposAdicionales] = useState({
    descripcion: "",
    imagen: "",
    genero: "",
    precio: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
    },
  });

  const handleCampoChange = (campo, valor) => {
    setCamposAdicionales((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const alEnviar = (datos) => {
    const juegos = obtenerJuegos();
    const duplicado = juegos.some(
      (juego) => juego.title.toLowerCase() === datos.title.trim().toLowerCase()
    );

    if (duplicado) {
      Swal.fire({
        title: "Juego ya existe",
        text: "Ya hay un juego con ese título registrado",
        icon: "warning",
      });
      return;
    }

    const nuevoJuego = {
      id: Date.now(),
      title: datos.title.trim(),
      descripcion: camposAdicionales.descripcion.trim(),
      imagen: camposAdicionales.imagen.trim(),
      genero: camposAdicionales.genero.trim(),
      precio: camposAdicionales.precio.trim(),
      createdAt: new Date().toISOString(),
    };

    agregarJuego(nuevoJuego);
    reset();
    setCamposAdicionales({
      descripcion: "",
      imagen: "",
      genero: "",
      precio: "",
    });
    Swal.fire({
      title: "Juego creado",
      icon: "success",
      timer: 1200,
      showConfirmButton: false,
    });
    alGuardar?.();
  };

  return (
    <Modal show onHide={alCerrar} backdrop="static" centered size="lg"   dialogClassName="modal-dark">
      <Form onSubmit={handleSubmit(alEnviar)}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Juego</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Título del juego *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Título del juego"
              isInvalid={!!errors.title}
              {...register("title", {
                required: "El título es obligatorio",
                minLength: { value: 3, message: "Mínimo 3 caracteres" },
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.title?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Descripción del juego"
              value={camposAdicionales.descripcion}
              onChange={(evento) => handleCampoChange("descripcion", evento.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>URL de la imagen</Form.Label>
            <Form.Control
              type="url"
              placeholder="https://ejemplo.com/imagen.jpg"
              value={camposAdicionales.imagen}
              onChange={(evento) => handleCampoChange("imagen", evento.target.value)}
            />
            {camposAdicionales.imagen && (
              <div className="mt-2">
                <img
                  src={camposAdicionales.imagen}
                  alt="Vista previa"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    objectFit: "contain",
                  }}
                  onError={(evento) => {
                    evento.target.style.display = "none";
                  }}
                />
              </div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Género</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Acción, Aventura, RPG"
              value={camposAdicionales.genero}
              onChange={(evento) => handleCampoChange("genero", evento.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: $1000ARS, GRATIS"
              value={camposAdicionales.precio}
              onChange={(evento) => handleCampoChange("precio", evento.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={alCerrar}>
            Cancelar
          </Button>
          <Button type="submit" disabled={isSubmitting} variant="primary">
            {isSubmitting ? "Creando..." : "Crear Juego"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
