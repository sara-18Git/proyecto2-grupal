const STORAGE_KEY = "juegos";

export function obtenerJuegos() {
  try {
    const datosLocalStorage = localStorage.getItem(STORAGE_KEY);
    const datos = JSON.parse(datosLocalStorage);
    return Array.isArray(datos) ? datos : [];
  } catch (err) {
    console.error("obtenerJuegos error:", err);
    return [];
  }
}

export function guardarJuegos(juegos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(juegos));
  } catch (err) {
    console.error( "guardarJuegos, error:", err);
  }
}

export function agregarJuego(juego) {
  const juegos = obtenerJuegos();
  juegos.push(juego);
 guardarJuegos(juegos);
}

export function eliminarJuegoPorId(id) {
  const juegos = obtenerJuegos().filter((juego) => juego.id !== id);
 guardarJuegos(juegos);
}
export function obtenerJuegoPorId(id) {
  return obtenerJuegos().find((juego) => juego.id === id);
}

export function actualizarJuego(id, cambios) {
  const juegos = obtenerJuegos();
  const index = juegos.findIndex((juego) => juego.id === id);
  if (index === -1) return false;

  if (cambios.title) {
    const dup = juegos.some(
      (juego) => juego.title === cambios.title && juego.id !== id
    );
    if (dup) {
      const err = new Error("TITULO_EXISTENTE");
      err.code = "TITULO_EXISTENTE";
      throw err;
    }
  }

  juegos[index] = {
    ...juegos[index],
    ...cambios,
    updatedAt: new Date().toISOString(),
  };
 guardarJuegos(juegos);
  return true;
}