import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
      title: "Hollow Knight: Silksong",
      description:
        "¡Descubre un vasto reino embrujado en Hollow Knight: Silksong! Explora, lucha y sobrevive mientras asciendes a la cima de un vasto reino gobernado por la seda y el canto.",
      price: "$20.000ARS",
      category: " Metroidvania/Pelea/Indie",
      rating: 5.0,
      detallesCompletos: `Hollow Knight: Silksong es el tan esperado seguimiento del aclamado Hollow Knight (2017). En lugar de controlar al Caballero, esta vez tomas el papel de Hornet, la princesa protectora de Hallownest, que ha sido capturada y llevada a un reino completamente nuevo, elevado y brillante: Pharloom.
La premisa es descubrir por qué fuiste llevada allí y ascender hasta la cima de la capital del reino, la ciudad de seda de Coralina.`,
      desarrollador: "Team Cherry",
      fechaLanzamiento: "4 de Septiembre, 2025",
      requisitos:
        "SO: Windows 7 (64-bit),Procesador: Intel Core i5-6500 o AMD equivalente",
      requisitos2: "Memoria: 8 GB de RAM",
      requisitos3:
        "Gráficos: GPU con 2GB de VRAM (GeForce GTX 950 / Radeon R7 370",
      medios: [
        {
          type: "image",
          url: "https://cdn.mos.cms.futurecdn.net/KsYCohcpXQfN2gMBPRtdHK-650-80.jpg.webp",
        },
        {
          type: "image",
          url: "https://static0.srcdn.com/wordpress/wp-content/uploads/2025/09/silksong-s-hornet-standing-next-to-a-small-bug-character-playing-and-singing-at-a-gate.jpg?q=49&fit=crop&w=1100&h=618&dpr=2",
        },
        {
          type: "video",
          url: "/videos/silkS.mp4",
          thumbnail: "/images/silk.jpg",
        },
        {
          type: "image",
          url: "https://static0.thegamerimages.com/wordpress/wp-content/uploads/wm/2025/09/hollowknightsilksongredplants-1.jpg?q=70&fit=crop&w=1100&h=618&dpr=1",
        },
      ],
    },
    {
      id: 3,
      title: "Fortnite",
      description:
        "Batalla campal con construcción, modos creativos y constantes actualizaciones en un mundo multijugador vibrante",
      price: "GRATIS",
      category: "Multijugador",
      rating: 4.5,
      detallesCompletos: `Fortnite es un fenómeno cultural que trasciende el género de los videojuegos, comenzando como un título de supervivencia cooperativa (Save the World) y eclosionando globalmente con su modo Battle Royale gratuito. En este modo, 100 jugadores son lanzados desde un autobús volador a un mapa vibrante y en constante evolución, donde deben competir para ser el último en pie. Su sello de identidad es el sistema de construcción único, que permite a los jugadores recolectar materiales (madera, piedra y metal) para editar el terreno en tiempo real, construyendo rampas, paredes y fuertes para ganar ventaja táctica en los enfrentamientos. El juego se caracteriza por su estética colorida y cartoon, su accesibilidad y su modelo de "temporadas" que introducen constantemente nuevo contenido, como mapas renovados, armas, vehículos, y un pase de batalla con una narrativa continua que desbloquea cientos de cosméticos. Más que un juego, Fortnite es una plataforma social y un escenario para eventos masivos en vivo, como conciertos de artistas como Travis Scott y Ariana Grande, y estrenos de películas, consolidándose como un metaverso de entretenimiento digital.`,
      desarrollador: "Epic Games",
      fechaLanzamiento: "25 de Julio, 2017",
      requisitos: "CPU: Core i3-3225 3.3 GHz; GPU: Intel HD 4000 (integrada) ",
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
      title: "Grand Theft Auto V",
      description:
        "Explora una ciudad gigantesca, comete crímenes y elige entre tres protagonistas en esta épica aventura.",
      price: "$35.500ARS",
      category: "Accion",
      rating: 5.0,
      detallesCompletos: ` Grand Theft Auto V es un videojuego de acción y aventura de mundo abierto ambientado en la metrópoli ficticia de Los Santos y las zonas rurales del condado de Blaine, basados en Los Ángeles y el sur de California. La narrativa sigue a tres protagonistas principales: el ladrón retirado Michael De Santa, el gangster callejero Franklin Clinton y el traficante de armas psicótico Trevor Philips; cuyas historias se entrelazan mientras realizan una serie de peligrosos golpes. El juego ofrece una crítica social satírica de la cultura estadounidense moderna, al tiempo que proporciona una experiencia masiva que combina la historia cinematográfica con la libertad de explorar un mundo vasto y lleno de detalles. Los jugadores pueden nadar, volar, conducir una inmensa variedad de vehículos y participar en numerosas actividades secundarias, desde tenis y golf hasta invertir en la bolsa de valores. Su modo en línea, GTA Online, expande la experiencia permitiendo a los jugadores crear sus propios personajes y cooperar o competir en un mundo persistente en constante evolución.`,
      desarrollador: "Rockstar Games",
      fechaLanzamiento: "17 de Septiembre, 2013",
      requisitos: "Windows 8.1 64-Bit, 4 GB RAM, ",
      requisitos2:
        "Intel Core 2 Quad CPU Q6600 @ 2.40GHz o AMD Phenom 9850 Quad-Core Processor",
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
      id: 5,
      title: "Valorant",
      description:
        "Shooter táctico 5v5 con personajes únicos y habilidades especiales en partidas competitivas por rondas.",
      price: "GRATIS",
      category: "Multijugador",
      rating: 3.7,
      detallesCompletos: `VALORANT es un hero shooter táctico en primera persona gratuito, desarrollado y publicado por Riot Games. Ambientado en un futuro cercano, el juego combina elementos de shooters precisos como Counter-Strike con habilidades únicas basadas en personajes (agentes). Dos equipos de cinco jugadores se enfrentan en rondas alternas como atacantes o defensores, con el objetivo de plantar o desactivar una bomba (el "Spike"). Cada agente posee cuatro habilidades distintivas (una de ellas definitiva), que requieren carga progresiva o recarga por rondas, añadiendo capas estratégicas de gestión de recursos y coordinación. Su jugabilidad se centra en la precisión de los disparos, el control de mapas con zonas estrechas y pasos angostos, y el uso inteligente de habilidades para obtener ventajas tácticas. El juego es conocido por su estética vibrante, su competitividad ajustada al milímetro, su sistema anticheat de kernel (Vanguard) y su constante evolución con nuevos agentes, mapas y modos de juego. Es un título fundamental en el panorama del esports, con una escena profesional global y activa.`,
      desarrollador: "Riot Games",
      fechaLanzamiento: "2 de Junio, 2020",
      requisitos: "CPU: Intel Core i3-4150 / AMD Ryzen 3 1200",
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
          url: "https://variety.com/wp-content/uploads/2024/08/valorant.png?w=1000&h=667&crop=1&resize=681%2C454",
        },
      ],
    },
    {
      id: 6,
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

    {
      id: 7,
      title: "Final Fantasy VII Rebirth",
      description:
        "La épica aventura de Cloud llega a PC. Explora un mundo vasto y redefine destinos en esta secuela.",
      price: "$70.000ARS",
      category: "Pelea/Aventura",
      rating: 5.0,
      detallesCompletos: `Final Fantasy VII Rebirth es la segunda entrega de la trilogía de remake de Final Fantasy VII. La historia continúa después de los eventos de Midgar, siguiendo a Cloud Strife y sus aliados en su búsqueda para detener a Sephiroth y salvar el planeta. El juego explora regiones icónicas como los Cañones Cosmo, Kalm, el Pantano Mithril y más.`,
      desarrollador: "Square Enix Business Division 1",
      fechaLanzamiento: "29 de febrero de 2024",
      requisitos: "windows 10/11 64-bit,16 GB RAM",
      requisitos2: "150 GB espacio disponible",
      requisitos3: "NVIDIA GeForce GTX 1060 (6GB) o AMD Radeon RX 480 (8GB)",
      medios: [
        {
          type: "image",
          url: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2909400/ss_5540aef3258019f77559ca77ef29ba893b61010f.1920x1080.jpg?t=1747042636",
        },
        {
          type: "image",
          url: "https://cdn.mos.cms.futurecdn.net/wW458Ef7iVeycuHat8wbbG-1599-80.png.webp",
        },
        {
          type: "video",
          url: "/videos/FINAL.mp4",
          thumbnail: "/images/final.jpg",
        },
        {
          type: "image",
          url: "https://articles-img.sftcdn.net/t_article_cover_xl/auto-mapping-folder/sites/2/2024/12/final-fantasy-vii-rebirth-pc.jpg",
        },
      ],
    },
    {
      id: 8,
      title: "Elden Ring Shadow of the Erdtree",
      description:
        "La expansión de Elden Ring. Explora las sombrías Tierras Intermedias de la Emperatriz Messmer.",
      price: "$35.000ARS",
      category: "DLC",
      rating: 4.2,
      detallesCompletos: `Shadow of the Erdtree es la expansión masiva de Elden Ring que transporta a los jugadores a la Tierra Sombra, un nuevo mundo gobernado por Miquella la Empyrean. Los jugadores seguirán el rastro de Miquella para descubrir los secretos detrás del Árbol Áureo y enfrentarse a nuevos peligros en esta tierra maldita.`,
      desarrollador: "	FromSoftware",
      fechaLanzamiento: "21 de junio de 2024",
      requisitos:
        "SO: Windows 10/11 64-bit,Procesador: Intel Core i5-8400 o AMD Ryzen 3 3300X",
      requisitos2: "80 GB espacio disponible (incluye juego base)",
      requisitos3:
        " NVIDIA GeForce GTX 1060 (6GB) o AMD Radeon RX 580 (8GB),12 GB RAM",
      medios: [
        {
          type: "image",
          url: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2778590/ss_c97bcad291f4f45d4be4594f34bd78921d961099.600x338.jpg?t=1720714093",
        },
        {
          type: "image",
          url: "https://hb.imgix.net/f6b579d39cfcffd84a68af1a15581805439f53dd.jpg?auto=compress,format&fit=crop&h=425&w=741&s=daa27cab012c175704c7b988b29bc829",
        },
        {
          type: "video",
          url: "/videos/Red2.mp4",
          thumbnail: "/images/elden.jpg",
        },
        {
          type: "image",
          url: "https://hb.imgix.net/f81ade7b64ee82167419504f30992221fac7c2b9.jpg?auto=compress,format&fit=crop&h=425&w=741&s=10ba0235ad880449b694cbb38c14bbcd",
        },
      ],
    },
    {
      id: 9,
      title: "Helldivers 2",
      description:
        "Guerra intergaláctica cooperativa. Difunde la democracia gestionista con fuego amigo y estratagemas caóticas.",
      price: "$40.000ARS",
      category: "Shooter Cooperativo",
      rating: 4.0,
      detallesCompletos: `Helldivers 2 es la secuela del aclamado Helldivers de 2015. Es un shooter de acción cooperativo en tercera persona que lleva la satírica "Guerra Galáctica" a una nueva dimensión, literalmente.
La premisa central se mantiene: Eres un Helldiver, un soldado de élite de "Super Tierra", encargado de extender la democracia, la libertad y la gestión managed (¡libertad gestionada es libertad!) a los confines de la galaxia, eliminando cualquier amenaza alienígena que se interponga en el camino.`,
      desarrollador: "8 de febrero de 2024",
      fechaLanzamiento: "8 de febrero de 2024",
      requisitos: "SO: Windows 10 64-bit",
      requisitos2: "Procesador (CPU): Intel Core i7-4790K o AMD Ryzen 5 1500X",
      requisitos3:
        "Tarjeta gráfica (GPU): NVIDIA GeForce GTX 1050 Ti o AMD Radeon RX 470",
      medios: [
        {
          type: "image",
          url: "https://images.squarespace-cdn.com/content/v1/55ef0e29e4b099e22cdc9eea/578cceff-f72f-42fc-b216-442cffd493d9/Bugs.jpg?format=1500w",
        },
        {
          type: "image",
          url: "https://images.squarespace-cdn.com/content/v1/55ef0e29e4b099e22cdc9eea/50383e10-b6be-47b3-b26a-0090c544f12a/Termind+Nest.jpg?format=1500w",
        },
        {
          type: "video",
          url: "/videos/Hell2.mp4",
          thumbnail: "/images/hell.webp",
        },
        {
          type: "image",
          url: "https://static0.srcdn.com/wordpress/wp-content/uploads/2024/02/helldivers-2-review.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5",
        },
      ],
    },
    {
      id: 10,
      title: "Black Myth: Wukong",
      description:
        "Acción espectacular con el Rey Mono. Viaje épico basado en el clásico chino 'Viaje al Oeste'.",
      price: "$60.000ARS",
      category: "Accion/Aventura/Pelea",
      rating: 5.0,
      detallesCompletos: `Black Myth: Wukong es un esperadísimo action RPG en tercera persona, de alto presupuesto y ambientado en un mundo oscuro y fantástico. Está inspirado en la clásica novela china del siglo XVI "Viaje al Oeste" (西游记), una de las四大名著 (Cuatro Grandes Novelas Clásicas de la literatura china).
Sin embargo, no se trata de una adaptación literal. El juego explora una narrativa más madura, sombría y mitológica, presentando una versión reinterpretada y épica de la leyenda. Tomas el control del "Destinado", un héroe que posee la memoria y las habilidades del Rey Mono, Sun Wukong.`,
      desarrollador: "Game Science (游戏科学)",
      fechaLanzamiento: "20 de agosto de 2024.",
      requisitos: "SO: Windows 10 64-bit,Intel Core i5-8400 / AMD Ryzen 5 1600",
      requisitos2: "16 GB de RAM",
      requisitos3:
        "Tarjeta gráfica (GPU): NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB",
      medios: [
        {
          type: "image",
          url: "https://i0.wp.com/techtunestales.com/wp-content/uploads/2024/09/black-myth-wukong-1-scaled.jpg?fit=768%2C432&ssl=1",
        },
        {
          type: "image",
          url: "https://cdn.gamerbraves.com/2020/08/Black-Myth-Featured-Pic-750x392.jpg",
        },
        {
          type: "video",
          url: "/videos/Black.mp4",
          thumbnail: "/images/wukong.jpg",
        },
        {
          type: "image",
          url: "https://live-production.wcms.abc-cdn.net.au/d56de90df8d03213edf286aab146da7e?impolicy=wcms_crop_resize&cropH=2160&cropW=3840&xPos=0&yPos=0&width=862&height=485",
        },
      ],
    },
    {
      id: 11,
      title: "Yakuza: Like a Dragon",
      description:
        "Vive el giro de Yakuza al JRPG. Sigue la legendaria historia de redención de Ichiban Kasuga.",
      price: "$11.000ARS",
      category: "Accion/Aventura",
      rol: "Recomendado",
      rating: 4.2,
      detallesCompletos: `Yakuza: Like a Dragon (conocido en Japón como Like a Dragon 7) es un RPG por turnos que marca un reinicio tanto en su sistema de combate como en su protagonista, mientras mantiene la esencia única de la saga: una narrativa dramática y criminal seriada mezclada con un tono absurdo, hilarante y lleno de actividades secundarias.
La historia sigue a Ichiban Kasuga (o "Ichi"), un peón de bajo rango de la yakuza que, tras pasar 18 años en prisión por un crimen que no cometió, descubre que su clan lo ha traicionado y lo ha dejado por muerto. Sin dinero, sin honor y sin un clan al que pertenecer, Ichi se embarca en una épica aventura en el distrito de Isezaki Ijincho en Yokohama para descubrir la verdad detrás de su traición y convertirse en el héroe de su propia historia.`,
      desarrollador: "Ryu Ga Gotoku Studio",
      fechaLanzamiento: "10 de noviembre de 2020",
      requisitos:
        "SO: Windows 10,Procesador (CPU): Intel Core i5-3470 / AMD FX-8350",
      requisitos2:
        "Memoria (RAM): 8 GB de RAM,Tarjeta gráfica (GPU): NVIDIA GeForce GTX 660 / AMD Radeon HD 7870",
      requisitos3: "40 GB de espacio disponible (SSD recomendado)",
      medios: [
        {
          type: "image",
          url: "https://www.gamereactor.eu/media/17/_3321713_650x.jpg",
        },
        {
          type: "image",
          url: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/11/yakuza-7-minigames.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5",
        },
        {
          type: "video",
          url: "/videos/Dragon.mp4",
          thumbnail: "/images/likeD.webp",
        },
        {
          type: "image",
          url: "https://static0.srcdn.com/wordpress/wp-content/uploads/2022/03/Yakuza-Like-A-Dragons-Worst-Character-Is-Nonomiya-Behavior-Bad-Ichiban-Out-Of-Character-Adachi.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5",
        },
      ],
    },
    {
      id: 12,
      title: "Hollow Knight ",
      description:
        "juego de aventura y acción 2D estilo Metroidvania donde un caballero insectoide explora el vasto y caído reino de Hallownest.",
      price: "$4.000ARS",
      category: "Metroidvania/Pelea/Indie",
      rating: 5.0,
      detallesCompletos: `Tú encarnas al Caballero, un pequeño y misterioso guerrero silencioso que viaja a la ruinosa ciudad de Dirtmouth y desciende al vasto reino subterráneo de Hallownest. Este reino, una vez próspero, ha sido consumido por una plaga supernatural que enloquece a sus habitantes. Tu misión es explorar sus profundidades, desentrañar sus secretos y detener la fuente de la infección.`,
      desarrollador: "Team Cherry",
      fechaLanzamiento: " 24 de Febrero de 2017",
      requisitos:
        "SO: Windows 7 (64-bit),Procesador: Intel Core 2 Duo E5200",
      requisitos2: "Memoria: 4 GB de RAM",
      requisitos3: "Gráficos: GeForce 9800GTX+ (1GB)",
      medios: [
        {
          type: "image",
          url: "https://media.gq.com/photos/5b4f85bf80d4544fbe01ecc9/16:9/w_1600,c_limit/hollow-night-review-gq-1.jpg",
        },
        {
          type: "image",
          url: "https://i.blogs.es/18b8fc/hollow-knight-hidden-dreams/1366_2000.webp",
        },
        {
          type: "video",
          url: "/videos/Hollow.mp4",
          thumbnail: "/images/hollow.jpg",
        },
        {
          type: "image",
          url: "https://i.blogs.es/e2d6e7/maxresdefault/1366_2000.webp",
        },
      ],
    },
    
  ];
  const navegacion = useNavigate();
  const handleComprar = () => {
    navegacion("/comprar");
  };
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
      <div className="container-fluid py-4 ">
        <div className="row px-2">
          <div className="col-md-6 mb-4">
            <div className="contenedor-medios mb-3 position-relative">
              {renderizarContenidoPrincipal()}

              <button
                className="btn btn-primary-detalles btn-navegacion btn-anterior"
                onClick={irAnterior}
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              <button
                className="btn btn-primary-detalles btn-navegacion btn-siguiente"
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
              ;
              <button
                className="btn btn-primary btn-lg flex-fill"
                onClick={handleComprar}
              >
                Comprar ahora
              </button>
              <button className="botonDeseos btn text-light ">
                lista de deseos
              </button>
            </div>

            <div className="info-producto p-3rounded">
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
            <div className="card-Detalles">
              <div className="Requisitos card-body">
                <p
                  className="descripcionCompleta"
                  style={{ whiteSpace: "pre-line" }}
                >
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
