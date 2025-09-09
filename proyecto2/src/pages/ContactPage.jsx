import React, { useState } from "react";
import "../components/Header.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [exito, setExito] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.email.trim()) newErrors.email = "El email es obligatorio.";
    if (!formData.mensaje.trim())
      newErrors.mensaje = "El mensaje es obligatorio.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    emailjs
      .send(
        "service_fqfe8ai", //  SERVICE_ID
        "template_p1g3913", //  TEMPLATE_ID
        {
          user_name: formData.nombre,
          user_email: formData.email,
          subject: formData.asunto,
          message: formData.mensaje,
          created_at: new Date().toLocaleString(),
        },
        "BxYPU4ObJfPOSjVCp" // PUBLIC_KEY
      )
      .then((response) => {
        console.log("Correo enviado con éxito", response.status, response.text);

        Swal.fire({
          icon: "success",
          title: "Mensaje enviado",
          text: "Gracias por contactarnos. Te responderemos pronto.",
          iconColor: "#042550ff",
          confirmButtonColor: "#042550ff",
        });

        setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
      })
      .catch((err) => {
        console.error("Error al enviar el correo", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="formulario-gamer shadow p-4">
            <h2 className="titulos-contactos text-center fw-bold">
              Contactanos
            </h2>
            <p className="text-form text-center">
              ¿Tenés dudas, sugerencias o querés colaborar con <b>GameHub</b>?
              <br />
              Completá el formulario 👇
            </p>

            <form onSubmit={handleSubmit}>
              {/* Nombre */}
              <div className="mb-3">
                <label className="text-form form-label">Nombre *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`form-control input-neon ${
                    errors.nombre ? "is-invalid" : ""
                  }`}
                  placeholder="Tu nombre"
                />
                {errors.nombre && (
                  <div className="invalid-feedback">{errors.nombre}</div>
                )}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="text-form form-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control input-neon ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Asunto */}
              <div className="text-form mb-3">
                <label className="form-label">Asunto</label>
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  className="form-control input-neon"
                  placeholder="Motivo del mensaje"
                />
              </div>

              {/* Mensaje */}
              <div className="mb-3">
                <label className="text-form form-label">Mensaje *</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className={`form-control input-neon ${
                    errors.mensaje ? "is-invalid" : ""
                  }`}
                  rows="4"
                  placeholder="Escribí tu mensaje..."
                />
                {errors.mensaje && (
                  <div className="invalid-feedback">{errors.mensaje}</div>
                )}
              </div>

              {/* Mensaje de éxito */}
              {exito && <div className="alert alert-success">{exito}</div>}

              {/* Botón */}
              <button
                type="submit"
                className="btn btn-gamer w-100"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>

            {/* Información adicional */}
            <div className="text-center mt-4">
              <p className="text-form">También podés escribirnos a:</p>
              <p className="text-form email-neon">gamehub.contacto@gmail.com</p>
              <p className="text-form">o encontranos en Discord 🎮</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
