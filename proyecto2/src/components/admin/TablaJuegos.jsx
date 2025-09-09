import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import {
  obtenerJuegos,
  eliminarJuegoPorId,
  migrarJuegosCarruseles,
} from "../../services/juegos.services";
import CreateGameModal from "./CreateGameModal";
import EditJuegosModal from "./EditJuegosModal";
import FilaTabla from "./FilaTabla";
import { itemsDestacados } from "../../db/juegosDestacados";
import { itemsRecomendados } from "../../db/juegosRecomendados";
function formatearFecha(iso) {
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso ?? "";
  }
}
export default function TablaJuegos() {
  
  const [juegos, setJuegos] = useState([]);
  const [editando, setEditando] = useState(null);
  const [creando, setCreando] = useState(false);

  const cargar = () => setJuegos(obtenerJuegos());
  useEffect(() => {
    migrarJuegosCarruseles(itemsDestacados, itemsRecomendados); 
    cargar();
    const enAlmacenamiento = (evento) => {
      if (evento.key === "juegos") cargar();
    };
    window.addEventListener("storage", enAlmacenamiento);
    return () => window.removeEventListener("storage", enAlmacenamiento);
  }, []);

  const manejarEliminar = async (id) => {
    const resultado = await Swal.fire({
      title: "¿Eliminar juego?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (resultado.isConfirmed) {
      eliminarJuegoPorId(id);
      cargar();
      Swal.fire({
        title: "Eliminado",
        icon: "success",
        timer: 1200,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center gap-2 mb-3 flex-wrap">
        <h3 className="m-0 text-light fs-1">Juegos registrados</h3>
        <Button variant="primary" onClick={() => setCreando(true)}>
          Nuevo juego
        </Button>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th style={{ minWidth: 80 }}>#</th>
            <th>Rol</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th style={{ minWidth: 180 }}>Genero</th>
            <th style={{ minWidth: 250 }}>Creado</th>
            <th style={{ minWidth: 250}}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {juegos.length ? (
            juegos.map((juego, idx) => (
              <FilaTabla
                key={juego.id ?? idx}
                juego={juego}
                idx={idx}
                formatearFecha={formatearFecha}
                setEditando={setEditando}
                manejarEliminar={manejarEliminar}
              />
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center py-4">
                No hay juegos registrados aún.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <div className="text-light fs-5">
        Total: {juegos.length} juego{juegos.length === 1 ? "" : "s"}
      </div>

      {creando && (
        <CreateGameModal
          alCerrar={() => setCreando(false)}
          alGuardar={() => {
            setCreando(false);
            cargar();
          }}
        />
      )}
      {editando && (
        <EditJuegosModal
          juego={editando}
          alCerrar={() => setEditando(null)}
          alGuardar={() => {
            setEditando(null);
            cargar();
          }}
        />
      )}
    </div>
  );
}
