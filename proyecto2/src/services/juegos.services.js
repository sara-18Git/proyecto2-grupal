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
    console.error("guardarJuegos, error:", err);
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

// FUNCIÓN ÚNICA - Elimina las duplicadas y deja solo esta
export function migrarJuegosCarruseles(juegosDestacados, juegosRecomendados = []) {
  const juegosExistentes = obtenerJuegos();
  
  // Si ya hay juegos, no migrar para no duplicar
  if (juegosExistentes.length > 0) {
    console.log("Ya existen juegos en el sistema, no se migran");
    return;
  }

  // Combinar juegos destacados y recomendados
  const todosLosJuegos = [
    // Juegos destacados (rol: "destacados")
    ...juegosDestacados.map((juego) => ({
      id: juego.id,
      title: juego.title,
      descripcion: juego.description,
      genero: juego.category,
      imagen: juego.image,
      precio: juego.price,
      rol: "destacados",
      createdAt: new Date().toISOString(),
    })),
    
    // Juegos recomendados (rol: "recomendado") - con IDs diferentes
    ...juegosRecomendados.map((juego) => ({
      id: juego.id + 100, // Sumamos 100 para IDs únicos
      title: juego.title,
      descripcion: juego.description,
      genero: juego.category,
      imagen: juego.image,
      precio: juego.price,
      rol: "recomendado",
      createdAt: new Date().toISOString(),
    }))
  ];

  guardarJuegos(todosLosJuegos);
  console.log(`${todosLosJuegos.length} juegos migrados al sistema`);
}

// Función para forzar migración (sobrescribe todo)
export function forzarMigracionJuegos(juegosDestacados, juegosRecomendados = []) {
  const todosLosJuegos = [
    // Juegos destacados
    ...juegosDestacados.map((juego) => ({
      id: juego.id,
      title: juego.title,
      descripcion: juego.description,
      genero: juego.category,
      imagen: juego.image,
      precio: juego.price,
      rol: "destacados",
      createdAt: new Date().toISOString(),
    })),
    
    // Juegos recomendados
    ...juegosRecomendados.map((juego) => ({
      id: juego.id + 100,
      title: juego.title,
      descripcion: juego.description,
      genero: juego.category,
      imagen: juego.image,
      precio: juego.price,
      rol: "recomendado",
      createdAt: new Date().toISOString(),
    }))
  ];

  guardarJuegos(todosLosJuegos);
  console.log(`${todosLosJuegos.length} juegos migrados forzadamente`);
}