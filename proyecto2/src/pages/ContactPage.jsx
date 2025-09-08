import React from "react";

const ContactPage = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="formulario-gamer shadow p-4">
            <h2 className="text-center fw-bold mb-4">Contáctanos</h2>
            <p className="text-center fw-bold">
              ¿Tenés dudas, sugerencias o querés colaborar con <b>GameHub</b>?
              Completa el formulario 👇
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nombre *</label>
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

              <div className="mb-3">
                <label className="form-label">Email *</label>
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

              <div className="mb-3">
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

              <div className="mb-3">
                <label className="form-label">Mensaje *</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className={`form-control input-neon ${
                    errors.mensaje ? "is-invalid" : ""
                  }`}
                  rows="4"
                  placeholder="Escribe tu mensaje..."
                />
                {errors.mensaje && (
                  <div className="invalid-feedback">{errors.mensaje}</div>
                )}
              </div>

              {exito && <div className="alert alert-success">{exito}</div>}

              <button
                type="submit"
                className="btn btn-gamer w-100"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>

            <div className="text-center mt-4">
              <p>También podés escribirnos a:</p>
              <p className="email-neon">gamehub.contacto@gmail.com</p>
              <p>o encontranos en Discord 🎮</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
