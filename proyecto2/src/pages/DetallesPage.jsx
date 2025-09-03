import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../components/css/detalles.css";
import { FaCircleExclamation } from "react-icons/fa6";
const DetallesPage = () => {
  const { id } = useParams();
  const [imagenPrincipal, setImagenPrincipal] = useState(0);
  const productos = [
    {
      id: 1,
      title: "STARDEW VALLEY",
      description:
        "Un juego relajante donde gestionas una granja, interactúas con un pueblo y decides tu estilo de vida rural.",
      price: "$1000ARS",
      category: "Simulador",
      rating: 4.5,
      detallesCompletos: `Stardew Valley es un RPG de vida campestre y simulación agrícola desarrollado íntegramente por Eric "ConcernedApe" Barone. Tras heredar una vieja granja de tu abuelo en el valle, escapas de la agobiante vida de ciudad para empezar de cero en un pueblo lleno de personajes únicos y secretos por descubrir. El juego combina la gestión de cultivos y ganado con la exploración de cuevas llenas de monstruos, la pesca relajante, la elaboración de artesanías, la cocina y la construcción de relaciones con los aldeanos, incluso leading al matrimonio y familia. Con un encanto pixel art, una banda sonora inolvidable y una libertad absoluta para diseñar tu granja y estilo de vida, Stardew Valley es un refugio digital que fomenta la creatividad, la comunidad y la conexión con la naturaleza. También incluye multijugador cooperativo donde hasta cuatro amigos pueden trabajar juntos en la misma granja.`,
      desarrollador: "ConcernedApe",
      fechaLanzamiento: "26 de Febrero, 2016",
      requisitos: "Windows 7+",
      requisitos2: "2 GHz processor",
      requisitos3: "2 GB RAM y 256 MB graphics card",
      medios: [
        {
          type: "image",
          url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiDPx9D_3JC7nxUs-KRqb1t1hgu16xd8Wks6AJ4cW7Y-qO9U0LZrStj0cThhMbgqJrybPS_zmwzyjzCjm39J4zLqBPugRFbSyUMutt2hmBBdbo6nm28eZNkP6LtAZX3bp9ak_2bY70lmcW/s1600/Stardew-Valley.jpg",
        },
        {
          type: "image",
          url: "https://play-lh.googleusercontent.com/q0qrXSFwSD1Hn5CvtSW5jYYxKBLQ6-qNEJ6kRoT0YaEse7-fOF2RXG8awkAJ7QMmDgE=w526-h296-rw",
        },
        {
          type: "video",
          url: "/videos/Stardew-Valley-Trailer.mp4",
          thumbnail: "/images/images.jpg",
        },
        {
          type: "image",
          url: "https://play-lh.googleusercontent.com/T222aXWMiaEO2DAlT45YETBZ6PdQhQUKVd9nQBdRYlIjJlomN_ee5okzbpA7M9sIPA4=w526-h296-rw",
        },
      ],
    },
    {
      id: 2,
      image:
        "https://gamerspotstorage01.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/05/23134358/GTAV-650x914.jpg",
      title: "Grand Theft Auto V",
      description:
        "Explora una ciudad gigantesca, comete crímenes y elige entre tres protagonistas en esta épica aventura.",
      price: "$35.500ARS",
      category: "Accion",
      rating: 5.0,
      detallesCompletos: ` Grand Theft Auto V es un videojuego de acción y aventura de mundo abierto ambientado en la metrópoli ficticia de Los Santos y las zonas rurales del condado de Blaine, basados en Los Ángeles y el sur de California. La narrativa sigue a tres protagonistas principales: el ladrón retirado Michael De Santa, el gangster callejero Franklin Clinton y el traficante de armas psicótico Trevor Philips; cuyas historias se entrelazan mientras realizan una serie de peligrosos golpes. El juego ofrece una crítica social satírica de la cultura estadounidense moderna, al tiempo que proporciona una experiencia masiva que combina la historia cinematográfica con la libertad de explorar un mundo vasto y lleno de detalles. Los jugadores pueden nadar, volar, conducir una inmensa variedad de vehículos y participar en numerosas actividades secundarias, desde tenis y golf hasta invertir en la bolsa de valores. Su modo en línea, GTA Online, expande la experiencia permitiendo a los jugadores crear sus propios personajes y cooperar o competir en un mundo persistente en constante evolución.`,
      desarrollador: "Rockstar Games",
      fechaLanzamiento: "17 de Septiembre, 2013",
      requisitos:
        "Windows 8.1 64-Bit, 4 GB RAM, ",
      requisitos2: "Intel Core 2 Quad CPU Q6600 @ 2.40GHz o AMD Phenom 9850 Quad-Core Processor",
      requisitos3: "NVIDIA 9800 GT 1GB / AMD HD 4870 1GB",
      medios: [
        {
          type: "image",
          url: "https://image.api.playstation.com/vulcan/ap/rnd/202203/0911/VIB0SeEj9vT6DTv7P4thJLZi.jpg",
        },
        {
          type: "image",
          url: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/b3d17a4e-96bf-11e6-a0d8-00163ed833e7/478725076/gta-v-walkthrough-grand-theft-auto-v-windows.jpg",
        },
        {
          type: "video",
          url: "/videos/Grand-Theft-Auto V_ The-Official-Trailer.mp4",
          thumbnail: "/images/GTA5.webp",
        },
        {
          type: "image",
          url: "https://wallpapers.com/images/featured/fondods-de-gta-5-o5zqq1pkpmdbw2yt.webp",
        },
      ],
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
      rating: 4.5,
      detallesCompletos: `Fortnite es un fenómeno cultural que trasciende el género de los videojuegos, comenzando como un título de supervivencia cooperativa (Save the World) y eclosionando globalmente con su modo Battle Royale gratuito. En este modo, 100 jugadores son lanzados desde un autobús volador a un mapa vibrante y en constante evolución, donde deben competir para ser el último en pie. Su sello de identidad es el sistema de construcción único, que permite a los jugadores recolectar materiales (madera, piedra y metal) para editar el terreno en tiempo real, construyendo rampas, paredes y fuertes para ganar ventaja táctica en los enfrentamientos. El juego se caracteriza por su estética colorida y cartoon, su accesibilidad y su modelo de "temporadas" que introducen constantemente nuevo contenido, como mapas renovados, armas, vehículos, y un pase de batalla con una narrativa continua que desbloquea cientos de cosméticos. Más que un juego, Fortnite es una plataforma social y un escenario para eventos masivos en vivo, como conciertos de artistas como Travis Scott y Ariana Grande, y estrenos de películas, consolidándose como un metaverso de entretenimiento digital.`,
      desarrollador: "Epic Games",
      fechaLanzamiento: "25 de Julio, 2017",
      requisitos:
        "CPU: Core i3-3225 3.3 GHz; GPU: Intel HD 4000 (integrada) ",
      requisitos2: "RAM: 4 GB",
      requisitos3: "SO: Windows 7/8/10/11 64-bit",
      medios: [
        {
          type: "image",
          url: "https://gmedia.playstation.com/is/image/SIEPDC/Fortnite-CH6S4-keyart-02-04aug25$es?$native$",
        },
        {
          type: "image",
          url: "https://cdn2.unrealengine.com/sg-header-1920x1080-9ad6b8083410.jpg?resize=1&w=1600",
        },
        {
          type: "video",
          url: "/videos/Fortnite.mp4",
          thumbnail: "/images/fortnite-.jpg",
        },
        {
          type: "image",
          url: "https://cdn2.unrealengine.com/fneco-37-00-opm-br-webcarousel-header-image-1920x1080-1920x1080-591a22a071bf.jpg?resize=1&w=1600",
        },
      ],
    },
    {
      id: 4,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202311/1717/0124532002d9b1295418e44465ceb3d3e9c1718416800efb.png",
      title: "The Last of Us Parte II Remaster",
      description:
        "Experiencia emocional postapocalíptica con gráficos mejorados y jugabilidad optimizada para PC.",
      price: "$55.000ARS",
      category: "Accion/Aventura",
      rating: 4.0,
      detallesCompletos: `The Last of Us Part II Remastered es la versión definitiva y mejorada del aclamado juego de acción y supervivencia de Naughty Dog, diseñada para PlayStation 5. Esta edición no solo lleva la experiencia visual a nuevos horizontes con resoluciones 4K, tasas de cuadros mejoradas y tiempos de carga drastically reducidos gracias al SSD, sino que también enriquece la profunda y polarizante narrativa con contenido adicional. La historia sigue a Ellie en su búsqueda implacable de venganza en un mundo post-apocalíptico que cycle de violencia, enfrentándola a consecuencias devastadoras y forzándola a cuestionar sus propias acciones. El juego amplía su jugabilidad con mecánicas de sigilo y combate más refinadas, entornos más expansivos y una inteligencia artificial mejorada. Incluye nuevos modos como "No Return", un roguelike de supervivencia con personajes jugables únicos, niveles acelerados y modificadores; Lost Levels con comentarios de los desarrolladores; y el modo Guitar Free Play, permitiendo a los jugadores tocar canciones con una variedad de instrumentos. Es una experiencia inmersiva y desgarradora que desafía las nociones de moralidad y redención.`,
      desarrollador: "Naughty Dog",
      fechaLanzamiento: "19 de Enero, 2024",
      requisitos:
        "SO: Windows 10/11 64-bit,Procesador: Intel Core i7-9700K / AMD Ryzen 7 3700X",
      requisitos2: "Memoria: 16 GB RAM,Gráficos: NVIDIA RTX 3070 / AMD RX 6700 XT",
      requisitos3: "Almacenamiento: 100 GB SSD (NVMe recomendado)",
      medios: [
        {
          type: "image",
          url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/12/last-us-parte-ii-remastered-3242670.jpg?tf=1200x",
        },
        {
          type: "image",
          url: "https://sm.ign.com/t/ign_fr/video/t/the-last-o/the-last-of-us-part-ii-remastered-no-return-mode-trailer_8he1.1200.jpg",
        },
        {
          type: "video",
          url: "/videos/Tlou2.mp4",
          thumbnail: "/images/tlou.jpg",
        },
        {
          type: "image",
          url: "https://i.guim.co.uk/img/media/3fb3728103d60af44b9ff57c3ee26f21397d671a/101_0_1875_1125/master/1875.jpg?width=620&dpr=1&s=none&crop=none",
        },
      ],
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
      rating: 3.7,
      detallesCompletos: `VALORANT es un hero shooter táctico en primera persona gratuito, desarrollado y publicado por Riot Games. Ambientado en un futuro cercano, el juego combina elementos de shooters precisos como Counter-Strike con habilidades únicas basadas en personajes (agentes). Dos equipos de cinco jugadores se enfrentan en rondas alternas como atacantes o defensores, con el objetivo de plantar o desactivar una bomba (el "Spike"). Cada agente posee cuatro habilidades distintivas (una de ellas definitiva), que requieren carga progresiva o recarga por rondas, añadiendo capas estratégicas de gestión de recursos y coordinación. Su jugabilidad se centra en la precisión de los disparos, el control de mapas con zonas estrechas y pasos angostos, y el uso inteligente de habilidades para obtener ventajas tácticas. El juego es conocido por su estética vibrante, su competitividad ajustada al milímetro, su sistema anticheat de kernel (Vanguard) y su constante evolución con nuevos agentes, mapas y modos de juego. Es un título fundamental en el panorama del esports, con una escena profesional global y activa.`,
      desarrollador: "Riot Games",
      fechaLanzamiento: "2 de Junio, 2020",
      requisitos:
        "CPU: Intel Core i3-4150 / AMD Ryzen 3 1200",
      requisitos2: "GPU: NVIDIA GeForce GT 730 / AMD Radeon R7 240RAM: 4 GB",
      requisitos3: "SO: Windows 10/11 64-bit",
      medios: [
        {
          type: "image",
          url: "https://esportsinsider.com/wp-content/uploads/2025/05/Top-VALORANT-settings-for-FPS-and-performance-in-2025-large.jpg.webp",
        },
        {
          type: "image",
          url: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/67fbd4c273f3d5e92a18666c6379db09e74b7cda-1920x1080.jpg?auto=format&fit=fill&q=80&w=1184",
        },
        {
          type: "video",
          url: "/videos/VALORANT.mp4",
          thumbnail: "/images/valorant.jpg",
        },
        {
          type: "image",
          url: "https://i.guim.co.uk/img/media/d5eab25b9cd2a38580bf8a13e7756b2eb27e6a5d/79_167_1047_628/master/1047.jpg?width=1300&dpr=1&s=none&crop=none",
        },
      ],
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
      rating: 5.0,
      detallesCompletos: `Red Dead Redemption 2 es una épica de vaqueros magistralmente elaborada por Rockstar Games, ambientada en el salvaje oeste estadounidense en 1899. La historia sigue a Arthur Morgan, un miembro clave de la banda de Dutch van der Linde, que se enfrenta al declive de la era de los forajidos mientras fuerzas lawmen y cazarrecompensas los persiguen sin tregua. El juego combina una narrativa profundamente emocional con un mundo abierto inmenso y vivo, donde cada detalle—desde el comportamiento de la fauna hasta las reacciones de los NPC—contribuye a una experiencia inmersiva sin igual. La jugabilidad integra combate táctico, exploración a caballo, caza, pesca y decisiones morales que afectan el desarrollo de la historia. Con gráficos photorealistic, un sistema de honor dinámico y una banda sonora evocadora, RDR2 es una obra maestra que redefine los límites del storytelling interactivo y la fidelidad ambiental. También incluye el modo online Red Dead Online, donde los jugadores pueden crear su propio aventurero y explorar el mundo con amigos.`,
      desarrollador: "Rockstar Games",
      fechaLanzamiento: "5 de Noviembre, 2019 (PC)",
      requisitos:
        "SO: Windows 10 (64-bit)CPU: Intel Core i7-4770K / AMD Ryzen 5 1500X",
      requisitos2: "RAM: 12 GB",
      requisitos3: "GPU: NVIDIA GTX 1060 6GB / AMD Radeon RX 480 4GB",
      medios: [
        {
          type: "image",
          url: "https://www.rollingstone.com/wp-content/uploads/2018/12/red-dead-redemption-2-soundtrack.jpg?w=1581&h=1054&crop=1",
        },
        {
          type: "image",
          url: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13122787/RDR2_Screenshot_080_copy.jpg?quality=90&strip=all&crop=7.8125%2C0%2C84.375%2C100&w=2400",
        },
        {
          type: "video",
          url: "/videos/Red2.mp4",
          thumbnail: "/images/redDead.jpg",
        },
        {
          type: "image",
          url: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.600x338.jpg?t=1720558643",
        },
      ],
    },
  ];

  const producto = productos.find((item) => item.id === parseInt(id));

  if (!producto) {
    return (
      <div className="container mt-5 text-center">Producto no encontrado</div>
    );
  }

  const irAnterior = () => {
    setImagenPrincipal((prev) =>
      prev === 0 ? producto.medios.length - 1 : prev - 1
    );
  };

  const irSiguiente = () => {
    setImagenPrincipal((prev) =>
      prev === producto.medios.length - 1 ? 0 : prev + 1
    );
  };

  const renderizarEstrellas = (rating) => {
    const estrellas = [];
    const estrellasLlenas = Math.floor(rating);
    const tieneMediaEstrella = rating % 1 !== 0;

    for (let i = 0; i < estrellasLlenas; i++) {
      estrellas.push(<i key={i} className="fas fa-star text-warning"></i>);
    }

    if (tieneMediaEstrella) {
      estrellas.push(
        <i key="half" className="fas fa-star-half-alt text-warning"></i>
      );
    }

    const estrellasVacias = 5 - estrellas.length;
    for (let i = 0; i < estrellasVacias; i++) {
      estrellas.push(
        <i key={`empty-${i}`} className="far fa-star text-warning"></i>
      );
    }

    return estrellas;
  };

  const carruselResponsive = {
    0: { items: 3 },
    568: { items: 4 },
    768: { items: 4 },
  };

  const renderizarMiniaturas = producto.medios.map((medio, indice) => (
    <div
      key={indice}
      className={`miniatura-item ${indice === imagenPrincipal ? "active" : ""}`}
      onClick={() => setImagenPrincipal(indice)}
    >
      {medio.type === "video" ? (
        <div className="video-miniatura">
          <img
            src={medio.thumbnail}
            alt="Miniatura de video"
            className="w-100"
          />
        </div>
      ) : (
        <img
          src={medio.url}
          alt={`${producto.title} ${indice + 1}`}
          className="w-100"
        />
      )}
    </div>
  ));

  const renderizarContenidoPrincipal = () => {
    const medio = producto.medios[imagenPrincipal];

    if (medio.type === "video") {
      return (
        <div className="contenedor-video">
          <video
            width="100%"
            height="400"
            controls
            className="reproductor-video"
            style={{ backgroundColor: "#000", borderRadius: "8px" }}
          >
            <source src={medio.url} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      );
    } else {
      return (
        <img
          src={medio.url}
          alt={producto.title}
          className="img-fluid w-100 imagen-principal"
          style={{ height: "400px", objectFit: "cover", borderRadius: "8px" }}
        />
      );
    }
  };

  return (
    <div className="contenedor-detalles">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="contenedor-medios mb-3 position-relative">
              {renderizarContenidoPrincipal()}

              <button
                className="btn btn-primary btn-navegacion btn-anterior"
                onClick={irAnterior}
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              <button
                className="btn btn-primary btn-navegacion btn-siguiente"
                onClick={irSiguiente}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="carrusel-miniaturas">
              <h6 className="mb-3">Vistas:</h6>
              <AliceCarousel
                mouseTracking
                items={renderizarMiniaturas}
                responsive={carruselResponsive}
                controlsStrategy="alternate"
                disableDotsControls
                disableButtonsControls={producto.medios.length <= 4}
                renderPrevButton={() => (
                  <button className="btn btn-sm btn-outline-secondary btn-carrusel-anterior">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                )}
                renderNextButton={() => (
                  <button className="btn btn-sm btn-outline-secondary btn-carrusel-siguiente">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                )}
              />
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="titulo-producto">{producto.title}</h1>
            <h2 className="subtitulo h4  mb-3">{producto.title}</h2>

            <div className="d-flex align-items-center mb-3">
              <span className="categoria badge me-3">{producto.category}</span>
              <div className="calificacion">
                {renderizarEstrellas(producto.rating)}
                <span className="ms-2 text-black">({producto.rating})</span>
              </div>
            </div>

            <div className="contenedor-precio mb-4 p-3  rounded">
              <h2 className="textoPrecio mb-0">{producto.price}</h2>
            </div>

            <div className="contenedorDescripcion mb-4">
              <h5 className="tituloDescripcion">DESCRIPCIÓN</h5>
              <p className="descripcion-producto text-light">
                {producto.description}
              </p>
            </div>

            <div className="d-grid gap-2 d-md-flex mb-4">
              <button className="btn btn-primary btn-lg flex-fill">
                COMPRAR AHORA
              </button>
              <button className="botonDeseos btn text-light ">
                LISTA DE DESEOS
              </button>
            </div>

            <div className="info-producto p-3rounded">
              <div className="mb-2">
                <strong>Activación:</strong>
                <span className="ms-2">
                  Ve a Configuración para activar Windows
                </span>
              </div>
              <div className="mb-2">
                <strong>Desarrollador:</strong>
                <span className="ms-2">{producto.desarrollador}</span>
              </div>
              <div>
                <strong>Fecha de lanzamiento:</strong>
                <span className="ms-2">{producto.fechaLanzamiento}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h3 className="tituloDescripcion ">Descripción Completa</h3>
            <div className="card">
              <div className="Requisitos card-body">
                <p className="lead" style={{ whiteSpace: "pre-line" }}>
                  {producto.detallesCompletos}
                </p>

                <h5>Requisitos del sistema</h5>
                <ul className="list-unstyled">
                  <li>
                    <FaCircleExclamation />
                    {producto.requisitos}
                  </li>
                  <li>
                    <FaCircleExclamation />
                    {producto.requisitos2}
                  </li>
                  <li>
                    <FaCircleExclamation /> {producto.requisitos3}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallesPage;
