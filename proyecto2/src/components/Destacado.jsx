import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/destacado.css";
import { FaPlayCircle } from "react-icons/fa";

const Destacado = () => {
  return (
    <div className="contenedorDestacado">
      <div className="contenedorDelJuego">
        <div className="contendorImagen">
          <img
            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/02/ff7-rebirth-cloud-sephiroth-and-zack.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5"
            alt=""
          />
        </div>
        <div className="contenedorTexto">
          <span>JUEGO DESTCADO DEL MES</span>
          <h2>Final Fantasy VII Rebirth</h2>
          <p>
            La continuación de la remake de uno de los JRPG más icónicos.
            Explora un mundo abierto masivo, descubre nuevas historias y revive
            los momentos clásicos con gráficos de última generación y
            jugabilidad mejorada.
          </p>
          <div className="banner-precio">$70.000 ARS</div>
          <div className="banner-acciones">
            {/* <Link to="/producto/cyberpunk-2077" className="btn btn-primary">
              Ver Detalles
            </Link> */}
            <a
              href="https://youtu.be/ESADIKP28AE?si=AIR1nwJRUao29a5f  "
              target="blank"

              className="btn-DestacadoBanner btn-secondaryo"
            >
              <FaPlayCircle />
            </a>
            <a href=" "className="btn-DestacadoBanner btn-secondaryo">
              Agregar a lista de deseos
            </a>
            <a href=" "className="btn-DestacadoBanner btn-secondaryo">

              Comprar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destacado;
