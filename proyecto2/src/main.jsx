import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Importa los componentes de ruteo
import './index.css';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import SobreNosotros from "./pages/SobreNosotros.jsx";

// Define el enrutador con las rutas de tu aplicación
const router = createBrowserRouter([
  {
    path: "/", // Ruta para la página principal
    element: <App />,
  },
  {
    path: "/nosotros", // Ruta para la página "Sobre Nosotros"
    element: <SobreNosotros />,
  },
]);

// Renderiza la aplicación usando el RouterProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);