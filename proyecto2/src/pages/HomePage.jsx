import React from "react";
import Carruseles from "../components/Carruseles";
import Carrusel from "../components/Carrusel";
import Beneficios from "../components/Beneficios";
import Destacado from "../components/Destacado";
import Carruseles2 from "../components/Carruseles2";
import CategoriaMultijugador from "../components/CategoriaMultijugador";
import CategoriaPelea from "../components/CategoriaPelea";
import CategoriaAccion from "../components/CategoriaAccion";
import CategoriaAventura from "../components/CategoriaAventura";
import CategoriaSimulador from "../components/CategoriaSimulador";
const HomePage = () => {
  return (
    <div>
      <div>
        <Carrusel></Carrusel>
      </div>

      <div>
        <Carruseles></Carruseles>
      </div>

      <div>
        <Beneficios></Beneficios>
      </div>

      <div>
        <Destacado></Destacado>
      </div>

      <div>
        <Carruseles2></Carruseles2>
      </div>

      <div>
        <CategoriaMultijugador></CategoriaMultijugador>
      </div>
      <div>

        <CategoriaPelea></CategoriaPelea>
      </div>

      <div>
        <CategoriaAccion></CategoriaAccion>
      </div>

      <div>
        <CategoriaAventura></CategoriaAventura>
      </div>
      <div><CategoriaSimulador></CategoriaSimulador></div>
    </div>
  );
};

export default HomePage;
