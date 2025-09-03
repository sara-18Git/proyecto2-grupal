import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./css/carruseles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
const Carruseles2 = () => {
  const items = [
    {
      id: 7,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202308/3005/537b5208a8ee42935286a44b3b981da86d976bf54899bf98.jpg",
      title: "Final Fantasy VII Rebirth",
      description:
        "La épica aventura de Cloud llega a PC. Explora un mundo vasto y redefine destinos en esta secuela.",
      price: "$70.000ARS",
      category: "Pelea/Aventura",
    },
    {
      id: 8,
      image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2778580/capsule_616x353.jpg?t=1744748042",
      title: "Elden Ring Shadow of the Erdtree",
      description:
        "La expansión de Elden Ring. Explora las sombrías Tierras Intermedias de la Emperatriz Messmer.",
      price: "$35.000ARS",
      category: "DLC",
    },
    {
      id: 9,
      image:
        "https://helldivers.wiki.gg/images/thumb/HD2_SteamLibrary-Portrait.jpg/300px-HD2_SteamLibrary-Portrait.jpg?ffffe7",
      title: "Helldivers 2",
      description:
        "Guerra intergaláctica cooperativa. Difunde la democracia gestionista con fuego amigo y estratagemas caóticas.",
      price: "$40.000ARS",
      category: "Shooter Cooperativo",
    },
    {
      id: 10,
      image:
        "https://assets-prd.ignimgs.com/2024/08/18/blackmyth-1723969364570.jpg?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80",
      title: "Black Myth: Wukong",
      description:
        "Acción espectacular con el Rey Mono. Viaje épico basado en el clásico chino 'Viaje al Oeste'.",
      price: "$60.000ARS",
      category: "Accion/Aventura/Pelea",
    },
    {
      id: 11,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMshu9wCalymvV2oOV937HrLrGd80n0qSwsQlMvc6ChAqgowndgS8h1RY7wwoiu6vVGd-l",
      title: "Yakuza: Like a Dragon",
      description:
        "Vive el giro de Yakuza al JRPG. Sigue la legendaria historia de redención de Ichiban Kasuga.",
      price: "$11.000ARS",
      category: "Accion/Aventura",
    },
    {
      id: 12,
      image:
        "https://s3.amazonaws.com/gameopedia_covers/covers/292397/2d8741d405211526a08f7e8c8a8b22db.jpeg",
      title: "bloodborne",
      description:
        "Caza bestias en Yharnam, una ciudad gótica maldita. Juego de acción rápido y atmosférico de FromSoftware.",
      price: "$12.000ARS",
      category: "Survival/Pelea",
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
      <h2 className="carruseles-heading">Recomendaciones De GameHub</h2>
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

export default Carruseles2;
