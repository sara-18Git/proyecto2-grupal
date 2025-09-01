import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./css/carruseles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Carruseles = () => {
  const items = [
    {
      id: 1,
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiDPx9D_3JC7nxUs-KRqb1t1hgu16xd8Wks6AJ4cW7Y-qO9U0LZrStj0cThhMbgqJrybPS_zmwzyjzCjm39J4zLqBPugRFbSyUMutt2hmBBdbo6nm28eZNkP6LtAZX3bp9ak_2bY70lmcW/s1600/Stardew-Valley.jpg",
      title: "Stardew Valley",
      description:
        "Un juego relajante donde gestionas una granja, interactúas con un pueblo y decides tu estilo de vida rural.",
      price: "$1000ARS",
      category: "Simulador",
    },
    {
      id: 2,
      image:
        "https://gamerspotstorage01.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/05/23134358/GTAV-650x914.jpg",
      title: "GTA 5",
      description:
        "Explora una ciudad gigantesca, comete crímenes y elige entre tres protagonistas en esta épica aventura.",
      price: "$17.500ARS",
      category: "Accion",
    },
    {
      id: 3,
      image:
        "https://cdn1.epicgames.com/offer/fn/FNBR_37-00_C6S4_EGS_Launcher_KeyArt_FNLogo_Blade_1200x1600_1200x1600-0924136c90b79f9006796f69f24a07f6",
      title: "Fortnite",
      description:
        "Batalla campal con construcción, modos creativos y constantes actualizaciones en un mundo multijugador vibrante",
      price: "GRATIS",
      category: "Multijugador",
    },
    {
      id: 4,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202311/1717/0124532002d9b1295418e44465ceb3d3e9c1718416800efb.png",
      title: "The Last of Us Parte II Remaster",
      description:
        "Experiencia emocional postapocalíptica con gráficos mejorados y jugabilidad optimizada para PC.",
      price: "$35.000ARS",
      category: "Accion/Aventura",
    },
    {
      id: 5,
      image:
        "https://store-images.s-microsoft.com/image/apps.21507.13663857844271189.4c1de202-3961-4c40-a0aa-7f4f1388775a.20ed7782-0eda-4f9d-b421-4cc47492edc6",
      title: "Valorant",
      description:
        "Shooter táctico 5v5 con personajes únicos y habilidades especiales en partidas competitivas por rondas.",
      price: "GRATIS",
      category: "Multijugador",
    },
    {
      id: 6,
      image:
        "https://i.blogs.es/juegos/13424/red_dead_3__nombre_temporal_/fotos/maestras/red_dead_3__nombre_temporal_-4030936.jpg",
      title: "Red Dead Redemption 2",
      description:
        "Vive el lejano oeste como forajido en una épica historia de redención en un vasto mundo abierto.",
      price: "$45.000ARS",
      category: "Aventura",
    },
  ];
  
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const renderItems = items.map((item) => (
    <div key={item.id} className="carruseles-card h-100 d-flex flex-column">
      <Link
        to={`/producto/${item.id}`}
        className="text-decoration-none"
        style={{ color: "inherit" }}
      >
        <div className="carruseles-image-container">
          <img
            src={item.image}
            alt={item.title}
            className="carruseles-image w-100"
          />
        </div>

        <div className="carruseles-content d-flex flex-column flex-grow-1">
          <h3 className="carruseles-title">{item.title}</h3>
          <p className="carruseles-description flex-grow-1">
            {item.description}
          </p>
          <div className="carruseles-category-tag">{item.category}</div>
          <span className="carruseles-price mt-auto">{item.price}</span>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="carruseles-container">
      <h2 className="carruseles-heading">Juegos Destacados</h2>
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

export default Carruseles;