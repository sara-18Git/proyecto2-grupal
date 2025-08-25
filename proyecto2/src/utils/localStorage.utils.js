export const guardarEnLocalStorage = (clave, valor) => {
  const valorJson = JSON.stringify(valor);
  localStorage.setItem(clave, valorJson);
};
// obtener de local storage
export const obtenerDeLocalStorage = (clave) => {
  const data = localStorage.getItem(clave);
  return data ? JSON.parse(data) : [];
};
// eliminar de local