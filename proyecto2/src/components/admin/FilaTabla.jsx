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
        return <FaRegStar className="text-danger" title="Juego Destacado" />;
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
    <tr key={juego.id}>
      <td>
        <div>
          <strong>{idx + 1}</strong>
          <div className="text-muted fs-6 small mt-3">
            {juego.rol ? (
              <span className="d-flex align-items-center gap-1">
                {obtenerIconoRol(juego.rol)}
                Rol: {juego.rol}
              </span>
            ) : (
              <span className="d-flex align-items-center gap-1">
                <FaQuestionCircle className="text-secondary" />
                Sin rol asignado
              </span>
            )}
          </div>
        </div>                                                                            
        
      </td>
      <td>
        <div className="d-flex align-items-center">
          {juego.imagen && (
            <img
              src={juego.imagen}
              alt={juego.title}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                marginRight: "10px",
                borderRadius: "4px",
              }}
            />
          )}
          <strong>{juego.title}</strong>
        </div>
      </td>

      <td>{juego.descripcion || "Sin descripción"}</td>
      <td>{juego.precio || "N/A"}</td>
      <td>{juego.genero || "N/A"}</td>
      <td>{formatearFecha(juego.createdAt)}</td>

      <td className="filas d-flex gap-3 ">
        <Button
          className="BotonesTabla mx-3 mt-5"
          size="sm"
          variant="secondary"
          onClick={() => setEditando(juego)}
        >
          Editar
        </Button>
        <Button
          className="BotonesTabla mx-3 mt-5"
          size="sm"
          variant="danger"
          onClick={() => manejarEliminar(juego.id)}
        >
          Eliminar
        </Button>
      </td>
    </tr>
  );
};

export default FilaTabla;
