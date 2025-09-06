import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { actualizarJuego } from "../../services/juegos.services";


export default function EditJuegosModal({ juego, alCerrar, alGuardar }) {
  const [camposAdicionales, setCamposAdicionales] = useState({
    descripcion: juego?.descripcion || "",
    imagen: juego?.imagen || "",
    genero: juego?.genero || "",
    precio: juego?.precio || ""
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: juego?.title ?? "",
    },
  });

  useEffect(() => {
    reset({
      title: juego?.title ?? "",
    });
    setCamposAdicionales({
      descripcion: juego?.descripcion || "",
      imagen: juego?.imagen || "",
      genero: juego?.genero || "",
      precio: juego?.precio || ""
    });
  }, [juego, reset]);

  const alEnviar = async (datos) => {
    try {
      await actualizarJuego(juego.id, {
        title: datos.title.trim(),
        descripcion: camposAdicionales.descripcion.trim(),
        imagen: camposAdicionales.imagen.trim(),
        genero: camposAdicionales.genero.trim(),
        precio: camposAdicionales.precio.trim()
      });
      Swal.fire({
        title: "Juego actualizado",
        icon: "success",
        timer: 1200,
        showConfirmButton: false,
      });
      alGuardar?.();
    } catch (err) {
      if (err?.code === "TITULO_EXISTENTE") {
        Swal.fire({
          title: "Título ya utilizado",
          text: "Existe otro juego con ese título.",
          icon: "warning",
        });
      } else {
        console.error(err);
        Swal.fire({ title: "Error al actualizar", icon: "error" });
      }
    }
  };

  const handleCampoChange = (campo, valor) => {
    setCamposAdicionales(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  return (
    <Modal show onHide={alCerrar} backdrop="static" centered size="lg"  dialogClassName="modal-dark">
      <Form onSubmit={handleSubmit(alEnviar)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar juego</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Título del juego *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Título"
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
              onChange={(e) => handleCampoChange("descripcion", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>URL de la imagen</Form.Label>
            <Form.Control
              type="url"
              placeholder="https://ejemplo.com/imagen.jpg"
              value={camposAdicionales.imagen}
              onChange={(e) => handleCampoChange("imagen", e.target.value)}
            />
            {camposAdicionales.imagen && (
              <div className="mt-2">
                <img 
                  src={camposAdicionales.imagen} 
                  alt="Vista previa" 
                  style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
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
              onChange={(e) => handleCampoChange("genero", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: $1000ARS, GRATIS"
              value={camposAdicionales.precio}
              onChange={(e) => handleCampoChange("precio", e.target.value)}
            />
          </Form.Group>

          <div className="text-muted small mt-2">
            Creado:{" "}
            {juego?.createdAt ? new Date(juego.createdAt).toLocaleString() : "-"}
            {juego?.updatedAt &&
              ` • Actualizado: ${new Date(juego.updatedAt).toLocaleString()}`}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={alCerrar}>
            Cancelar
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}