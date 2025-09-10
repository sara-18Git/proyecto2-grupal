import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./css/carruseles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { data, Link } from "react-router-dom";
import { obtenerJuegos } from "../services/juegos.services";
const CategoriaPelea = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  }; 
   const [juegos, setJuegos] = useState([]);
  useEffect(() => {
    const data = obtenerJuegos();
    setJuegos(data);
  }, []);
  const renderItems = juegos
    .filter((item) => item.genero === "Pelea")
    .map((item) => (
      <div key={item.id} className="carruseles-card h-100 d-flex flex-column">
        <Link
          to={`/producto/${item.id}`}
          className="text-decoration-none"
          style={{ color: "inherit" }}
        >
          <div className="carruseles-image-container">
            <img
              src={item.imagen}
              alt={item.title}
              className="carruseles-image w-100"
            />
          </div>

          <div className="carruseles-content d-flex flex-column flex-grow-1">
            <h3 className="carruseles-title">{item.title}</h3>
            <p className="carruseles-description flex-grow-1">
              {item.descripcion}
            </p>
            <div className="carruseles-category-tag">{item.genero}</div>
            <span className="carruseles-price mt-auto">{item.precio}</span>
          </div>
        </Link>
      </div>
    ));
  return (
    <div className="carruseles-container">
      <h2 className="carruseles-heading">Categoria Pelea</h2>
      <div className="h-100">
        <AliceCarousel
          mouseTracking
          items={renderItems}
          responsive={responsive}
          controlsStrategy="alternate"
          infinite
          disableDotsControls
          renderPrevButton={() => (
            <button className="carruseles-button carruseles-button-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M15.5 5l-7 7 7 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
          renderNextButton={() => (
            <button className="carruseles-button carruseles-button-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M8.5 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        />
      </div>
    </div>
  );
};

export default CategoriaPelea;
