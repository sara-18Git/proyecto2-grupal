import React from "react";
import Header from "./components/Header";
// Import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import Carousel from "./components/carrusel"; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <div>
      <AppRoutes />
      <Carousel />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
