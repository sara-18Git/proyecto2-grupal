import React from "react";
import { Button } from "react-bootstrap";
import { FaRegStar } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaQuestionCircle } from "react-icons/fa";
import "../css/tabla.css";

const FilaTabla = ({
  juego,
  idx,
  setEditando,
  manejarEliminar,
  formatearFecha,
}) => {
  const obtenerIconoRol = (rol) => {
    switch (rol) {
      case "destacados":
        return <FaRegStar className="text-warning" title="Juego Destacado" />;
      case "recomendado":
        return (
          <LiaCertificateSolid
            className="text-primary"
            title="Juego Recomendado"
          />
        );
      default:
        return (
          <FaQuestionCircle
            className="text-secondary"
            title="Rol no definido"
          />
        );
    }
  };

  return (
    <tr key={juego.id} className="fila-tabla">
      <td className="col-numero">
        <div className="numero-fila">
          <strong>{idx + 1}</strong>
        </div>
      </td>
      
      <td className="col-rol">
        <div className="contenedor-rol">
          {juego.rol ? (
            <span className="badge-rol d-flex align-items-center gap-1">
              {obtenerIconoRol(juego.rol)}
              <span className="texto-rol">{juego.rol}</span>
            </span>
          ) : (
            <span className="badge-rol d-flex align-items-center gap-1">
              <FaQuestionCircle className="text-secondary" />
              <span className="texto-rol">Sin rol asignado</span>
            </span>
          )}
        </div>
      </td>
      
      <td className="col-titulo">
        <div className="contenedor-titulo">
          {juego.imagen && (
            <img
              src={juego.imagen}
              alt={juego.title}
              className="imagen-juego"
            />
          )}
          <strong className="titulo-juego">{juego.title}</strong>
        </div>
      </td>

      <td className="col-descripcion">
        <div className="descripcion-juego">
          {juego.descripcion || "Sin descripción"}
        </div>
      </td>
      
      <td className="col-precio">
        <span className="precio-juego">{juego.precio || "N/A"}</span>
      </td>
      
      <td className="col-genero">
        <span className="genero-juego">{juego.genero || "N/A"}</span>
      </td>
      
      <td className="col-fecha">
        <span className="fecha-juego">{formatearFecha(juego.createdAt)}</span>
      </td>

      <td className="col-acciones">
        <div className="contenedor-botones">
          <Button
            className="btn-tabla btn-editar"
            size="sm"
            variant="secondary"
            onClick={() => setEditando(juego)}
          >
            Editar
          </Button>
          <Button
            className="btn-tabla btn-eliminar"
            size="sm"
            variant="danger"
            onClick={() => manejarEliminar(juego.id)}
          >
            Eliminar
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default FilaTabla;