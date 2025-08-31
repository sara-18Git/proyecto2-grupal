import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { IoCloudDownload } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BsPersonArmsUp } from "react-icons/bs";
import "./css/beneficios.css";

const Beneficios = () => {
  return (
    <div className="contenedorBeneficios mt-5 h-100 overflow-hidden">
      <h2 className="TituloBeneficios text-center mb-5">
        Beneficios de comprar con Nosotros
      </h2>

      <div className="divBeneficios row justify-content-center mx-0 h-100 gap-lg-5">
        <div className="col-md-3 mb-4 px-2">
          <div className="beneficio-item d-flex align-items-start p-3">
            <IoCloudDownload className="icono-beneficio me-3" />
            <div>
              <h3 className="tituloDeBeneficios h6">SUPER RÁPIDO</h3>
              <p className="subtituloBeneficios small mb-0">Descarga Digital instantánea</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4 px-2">
          <div className="beneficio-item d-flex align-items-start p-3">
            <RiSecurePaymentFill  className="icono-beneficio me-3  w-lg-50 w-md-25" />
            <div>
              <h3 className="tituloDeBeneficios h6"> FIABLE Y SEGURO</h3>
              <p className="subtituloBeneficios small mb-0">Más de 15.000 clientes satisfechos</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4 px-2">
          <div className="beneficio-item d-flex align-items-start p-3">
            <BsPersonArmsUp className="icono-beneficio me-3 " />
            <div>
              <h3 className="tituloDeBeneficios h6">ATENCIÓN AL CLIENTE</h3>
              <p className="subtituloBeneficios small mb-0">Agente disponible 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
