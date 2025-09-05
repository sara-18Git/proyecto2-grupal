import React from "react";
import { Button } from "react-bootstrap";

const FilaTabla = ({
  juego,
  idx,
  setEditando,
  manejarEliminar,
  formatearFecha,
}) => {
  return (
    <tr key={juego.id}>
      <td>{idx + 1}</td>
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
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          )}
          <div>
            <strong>{juego.title}</strong>
            {juego.genero && (
              <div className="small text-muted">{juego.genero}</div>
            )}
          </div>
        </div>
      </td>
      <td>
        {juego.descripcion && juego.descripcion.length > 50
          ? `${juego.descripcion.substring(0, 50)}...`
          : juego.descripcion}
      </td>
      <td>{juego.precio || "N/A"}</td>
      <td>{formatearFecha(juego.createdAt)}</td>
      <td className="d-flex gap-2">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setEditando(juego)}
        >
          Editar
        </Button>
        <Button
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
