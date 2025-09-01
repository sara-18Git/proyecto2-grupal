
import React from "react";
import Carruseles from "../components/carruseles";
import Carrusel from "../components/Carrusel";
import Beneficios from "../components/Beneficios";
import Destacado from "../components/Destacado";
const HomePage = () => {
  return (
    <div>
      <Carrusel></Carrusel>
      <Carruseles></Carruseles>
      <br />
      <Beneficios></Beneficios>
      <br />
      <Destacado></Destacado>
    </div>
  );
};

export default HomePage;
