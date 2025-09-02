import React from "react";
import Carruseles from "../components/Carruseles";
import Carrusel from "../components/Carrusel";
import Beneficios from "../components/Beneficios";
import Destacado from "../components/Destacado";
import Carruseles2 from "../components/carruseles2";

const HomePage = () => {
  return (
    <div>
      <Carrusel></Carrusel>
      <Carruseles></Carruseles>
      <br />
      <Beneficios></Beneficios>
      <br />
      <Destacado></Destacado>
      <br />
      <Carruseles2></Carruseles2>
    </div>
  );
};

export default HomePage;
