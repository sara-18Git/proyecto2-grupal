import React from "react";

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

const SobreNosotros = () => {
  return (
    <div className="bg-dark text-white p-4 p-md-5 mt-auto rounded-top shadow h-100">
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center betwe">
        {/* Sección de avatares de los miembros */}
        <div className="d-flex align-items-center mb-3 mb-md-0 text-light ">
          <h2 className="h4 text-info d-flex align-items-center me-3 text-light text text-center">
            Grupo 1
          </h2>
          <div className="text-center text-md-end text-light">
            <p className="small mb-1 text-light text text-center">
              Proyecto Final Modulo2
            </p>
            <p className="small mb-0 text-light text text-center">
              &copy; {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>
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
      <div className="p-5 "> <h1>Conoce a Nuestro Equipo 👥</h1>
        <p>
           Detrás de cada píxel y cada interfaz de
          usuario, hay una mente creativa que da vida a nuestra plataforma. Nos
          enorgullece presentar al equipo que hace que esta visión sea una
          realidad:</p>
          <h2>Felipe Marrone:</h2>  <p>Como Arquitecto de Sistemas, Felipe se
          asegura de que nuestra plataforma sea tan robusta y fluida como los
          juegos que albergamos. Es el guardián de la estabilidad, el cerebro
          que diseña la infraestructura para que los servidores nunca caigan,
          incluso en los lanzamientos más esperados. </p>
          <h2>Facundo Mamaní:</h2> <p>Nuestro
          Diseñador de Experiencia de Usuario (UX), Facundo, es el artista
          detrás de cada clic y cada menú. Su enfoque está en la intuición y la
          simplicidad, garantizando que la navegación por la plataforma sea tan
          natural y emocionante como explorar un nuevo mapa en un videojuego.
          </p><h2>Sara Robles:</h2> <p>Jefa de Producto y Estrategia, Sara es la brújula del
          equipo. Con su visión de mercado, guía nuestro desarrollo para que
          siempre estemos un paso por delante, identificando las necesidades de
          la comunidad y asegurando que cada nueva funcionalidad se alinee con
          nuestra misión.</p> <h2>Damián Osores:</h2> <p> Con un rol crucial como Desarrollador
          Full-Stack  es el puente entre el front-end y el back-end.
          Trabaja incansablemente para que todo lo que ves y todo lo que sucede
          detrás de escena funcione en perfecta armonía. Es el ingeniero que
          convierte las ideas en código funcional. </p><h2>Melisa Jiménez:</h2> <p> Nuestra
          Community Manager, Melisa, es la voz del equipo y el corazón de la
          comunidad. Con su energía y dedicación, fomenta el diálogo con los
          jugadores, organiza eventos y se asegura de que cada persona se sienta
          escuchada y valorada en nuestra plataforma. </p> <h2>Amelia Antoni:</h2> <p> Como
          Analista de Datos, Amelia es la detective del equipo. Utiliza la
          información para entender el comportamiento de los usuarios,
          ayudándonos a tomar decisiones informadas sobre qué juegos recomendar
          y cómo mejorar la plataforma para ofrecer una experiencia más
          personalizada.</p> <h2>Nuestro Compromiso 🤝 </h2> <p>Creemos en el poder de los
          videojuegos para inspirar, conectar y entretener. Nos comprometemos a
          mantener nuestra plataforma como un lugar seguro, justo y lleno de
          oportunidades tanto para jugadores como para desarrolladores. Gracias
          por ser parte de este viaje y por ayudarnos a dar forma al futuro de
          los videojuegos. Esperamos que este texto te sea de gran ayuda para
          darle una identidad y un propósito a la página de tu equipo. ¿Qué te
          parece este contenido para el proyecto?
        </p>
      </div>
    </div>
  );
};

export default SobreNosotros;
