import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./css/nosotros.css";
import "./css/carruseles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import miImagen2 from "../assets/imagenes-nosotros/imagen-team-member1 (1).png";
import miImagen3 from "../assets/imagenes-nosotros/imagen-team-member1 (3).png";
import miImagen4 from "../assets/imagenes-nosotros/imagen-team-member1 (5).png";
import miImagen5 from "../assets/imagenes-nosotros/imagen-team-member1 (6).png";
import miImagen1 from "../assets/imagenes-nosotros/imagen-team-member1 (8).png";
import miImagen6 from "../assets/imagenes-nosotros/imagen-team-member1 (9).png";
import miImagen7 from "../assets/imagenes-nosotros/imagen-team-member1 (10).png";
import miImagen8 from "../assets/imagenes-nosotros/imagen team.png";
import miImagen9 from "../assets/imagenes-nosotros/imagen-team-member1 (11).png"
import clickSoundfile from "../assets/sounds/click.mp3"
import overImagen from "../assets/sounds/overimagen.wav"

const CarruselesNosotros = () => {
  // Esta función se activará cuando el carrusel cambie
  const handleSlideChange = () => {
    new Audio(clickSoundfile).play();
    // Esta función se activará cuando el mouse pase por la zona del carrusel
  };const playHoverSound = () => {
    new Audio(overImagen).play();
  };
  const items = [
    {
      id: 1,
      image:miImagen9
        ,
      title: "Facundo Mamani",
      description:
        "Nuestro Diseñador de Experiencia de Usuario (UX), Facundo, es el          artista detrás de cada clic y cada menú. Su enfoque está en la          intuición y la simplicidad, garantizando que la navegación por la          plataforma sea tan natural y emocionante como explorar un nuevo mapa          en un videojuego.",
      
      category: "Diseñador Ux",
    },
    {
      id: 2,
      image:miImagen3
,
      title: "Amelia Antoni",
      description:
        "Como Analista de Datos, Amelia es la detective del equipo. Utiliza la          información para entender el comportamiento de los usuarios,    ayudándonos a tomar decisiones informadas sobre qué juegos recomendar          y cómo mejorar la plataforma para ofrecer una experiencia más         personalizada.",
        category: "Analista de Datos",
    },
    {
      id: 3,
      image:
        miImagen4,
      title: "Sara Robles",
      description:
        "Jefa de Producto y Estrategia, Sara es la brújula del equipo. Con su          visión de mercado, guía nuestro desarrollo para que siempre estemos un         paso por delante, identificando las necesidades de la comunidad y        asegurando que cada nueva funcionalidad se alinee con nuestra misión.",
      category: "Jefa de Producción y estrategia",
    },
    {
      id: 4,
      image:
        miImagen5,
      title: "Melisa Jimenez",
      description:
        "Nuestra Community Manager, Melisa, es la voz del equipo y el corazón          de la comunidad, no podríamos hacerlo igual sin ella. Con su energía y dedicación, fomenta el diálogo con          los jugadores, organiza eventos y se asegura de que cada persona se          sienta escuchada y valorada en nuestra plataforma.                ",
        category: "Community Manager",
    },
    {
      id: 5,
      image:
        miImagen6,
      title: "Felipe Marrone",
      description:
        "Como Arquitecto de Sistemas, Felipe se asegura de que nuestra        plataforma sea tan robusta y fluida como los juegos que albergamos. Es         el guardián de la estabilidad, el cerebro que diseña la infraestructura para que los servidores nunca caigan, incluso en los lanzamientos más esperados",
      category: "Arquitecto de Sistemas",
    },
    {
      id: 6,
      image:
        miImagen1,
      title: "Damián Osores",
      description:
        "Con un rol crucial como Desarrollador Full-Stack es el puente entre el       front-end y el back-end. Trabaja incansablemente para que todo lo que ves y todo lo que sucede detrás de escena funcione en perfecta armonía. Es el ingeniero que convierte las ideas en código funcional.",
      
      category: "Desarrollador Full Stack",
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
        to={`/teammember/${item.id}`}
        className="text-decoration-none"
        style={{ color: "inherit" }}
      >
        <div className="carruseles-image-container">
          <img
            src={item.image}
            alt={item.title}
            className="carruseles-image w-100"
            onMouseEnter={playHoverSound}
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
      <h2 className="carruseles-heading">Miembros Destacados</h2>
      <div className="h-100">
        <AliceCarousel
          mouseTracking
          items={renderItems}
          responsive={responsive}
          controlsStrategy="alternate"
          infinite
          disableDotsControls
        //   esta es la propiedad que activa el sonido al deslizar
          onSlideChange={handleSlideChange} 
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

export default CarruselesNosotros;
