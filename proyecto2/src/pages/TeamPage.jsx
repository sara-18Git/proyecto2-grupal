import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CarruselesNosotros from "../components/Carrusel_nosotros";

const members = [
  {
    name: "Felipe Marrone",
    avatar:
      "https://img.icons8.com/?size=100&id=xWB5VQsXqNGy&format=png&color=000000",
  },
  {
    name: "Facundo Mamaní",
    avatar:
      "https://img.icons8.com/?size=100&id=45Xlab1qZY10&format=png&color=000000",
  },
  {
    name: "Sara Robles",
    avatar:
      "https://img.icons8.com/?size=100&id=qfXbHpMZ0CnB&format=png&color=000000",
  },
  {
    name: "Damián Osores",
    avatar:
      "https://img.icons8.com/?size=100&id=OP06qcyGQ1M7&format=png&color=000000",
  },
  {
    name: "Melisa Jiménez",
    avatar:
      "https://img.icons8.com/?size=100&id=UveN44WODIpA&format=png&color=000000",
  },
  {
    name: "Amelia Antoni",
    avatar:
      "https://img.icons8.com/?size=100&id=hBnO68JMCIMP&format=png&color=000000",
  },
];

const TeamPage = () => {
  return (
    <div className="text-white p-4 p-md-5 mt-auto rounded-top shadow h-100 " style={{backgroundColor:'010f29'}}>
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center betwe">
        {/* Sección de avatares de los miembros */}
        
      </div>
      <div className="p-5 ">
        {" "}
        <h1>Conoce a Nuestro Equipo  y Nuestro Compromiso 👥🤝</h1>
                {" "}
        <p>
          Creemos en el poder de los videojuegos para inspirar, conectar y
          entretener. Nos comprometemos a mantener nuestra plataforma como un
          lugar seguro, justo y lleno de oportunidades tanto para jugadores como
          para desarrolladores. Gracias por ser parte de este viaje y por
          ayudarnos a dar forma al futuro de los videojuegos. Esperamos que este
          texto te sea de gran ayuda para darle una identidad y un propósito a
          la página de tu equipo. ¿Qué te parece este contenido para el
          proyecto? Detrás de cada píxel y cada interfaz de usuario, hay una mente
          creativa que da vida a nuestra plataforma. Nos enorgullece presentar
          al equipo que hace que esta visión sea una realidad
        </p>
        
        <CarruselesNosotros></CarruselesNosotros>
        <div className="d-flex p-5">
            {members.map((member, index) => (
              <div key={index} className="d-flex me-1">
                <img
                  className="rounded-circle border border-white"
                  src={member.avatar}
                  alt={`Avatar de ${member.name}`}
                  title={member.name}
                  style={{ width: "100px", height: "100px", margin: "10px" }}
                />
                <span className="text-white-80 small">{member.name}</span>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default TeamPage;
