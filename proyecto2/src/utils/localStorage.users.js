export function obtenerUsuariosDeLocalStorage() {
    try {
      const listadoUsuariosJSON = localStorage.getItem("usuarios");
      const listadoUsuarios = JSON.parse(listadoUsuariosJSON);
      return listadoUsuarios ? listadoUsuarios : [];
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  export function guardarEnLocalStorage(usuarios) {
    try {
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    } catch (error) {
      console.error(error);
      throw error;
    }
  }


