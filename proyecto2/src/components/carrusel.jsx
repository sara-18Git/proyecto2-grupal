import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './css/carrusel.css';
import { TiCloudStorage } from "react-icons/ti";
import { IoEyeSharp } from "react-icons/io5";
import { LuSparkles } from "react-icons/lu";

const Carrusel = () => {
  const ChevronLeft = () => (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6"/>
    </svg>
  );

  
  const ChevronRight = () => (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6"/>
    </svg>
  );


  const items = [
  <div className="item" data-value="1">
      <img 
        src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/06/last-us-part-i-2727069.jpg" 
        alt="The Last of Us" 
        className="carousel-image"
      />
      <div className="banner-overlay">
        <div className="banner-text-left">
          <div className="banner-title">Revive mommentos magicos con...</div>
          <div className="banner-subtitle">THE LAST OF US<LuSparkles /></div>
        </div>
        
        <button className="ver-mas-btn">OBTENER<TiCloudStorage /></button>
      </div>
      
    </div>,
    <div className="item" data-value="2">
      <img 
        src="https://culturageek.com.ar/wp-content/uploads/2025/03/Silent-Hill-2-remake-Portada-1536x768.webp" 
        alt="Slide 2" 
        className="carousel-image"
      />
     <div className="banner-overlay">
        <div className="banner-text-left">
          <div className="banner-title">Sillent Hill 2 Remake</div>
          <div className="banner-subtitle">Llego a GameHub!</div>
        </div>
        
        <button className="ver-mas-btn">OBTENER<TiCloudStorage /></button>
      </div>
    </div>,
    <div className="item" data-value="3">
      <img 
        src="https://i.blogs.es/8559a5/metal-gear-solid-3-remake/1366_2000.webp" 
        alt="Slide 3" 
        className="carousel-image"
      />
   <div className="banner-overlay">
        <div className="banner-text-left">
          <div className="banner-title">Metal Gear Solid Snake Eater</div>
          <div className="banner-subtitle">Proximamente...</div>
        </div>
        
        <a className="ver-mas-btn"href="https://youtu.be/iNX8QCeymFM?si=KGM9uxNJEd1niOO6" target="_blank" rel="noopener noreferrer">VER MAS<IoEyeSharp /></a>
      </div>
    </div>,
     <div className="item" data-value="4">
      <img 
        src="https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/bt/BT9GRA0GTJ2S1755225775593.jpg" 
        alt="Slide 4" 
        className="carousel-image"
      />  <div className="banner-overlay">
        <div className="banner-text-left">
          <div className="banner-title"> Overwacth 2</div>
          <div className="banner-subtitle">Nueva season ya disponible</div>
        </div>
        
        <button className="ver-mas-btn">OBTENER<TiCloudStorage /></button>
      </div>
    </div>,
        <div className="item" data-value="5">
      <img 
        src="https://es.digitaltrends.com/wp-content/uploads/2024/07/Bellingham-EA-Sports-FC.jpg?fit=720%2C405&p=1" 
        alt="Slide 4" 
        className="carousel-image"
      />  <div className="banner-overlay">
        <div className="banner-text-left">
          <div className="banner-title">diviertete con tus amigos jugando a...</div>
          <div className="banner-subtitle">EA FC Sports 2025</div>
        </div>
        
        <button className="ver-mas-btn">OBTENER<TiCloudStorage /></button>
      </div>
          
     
    
    </div>,
  
  ];
  const renderPrevButton = ({ isDisabled }) => (
    <button 
      className={`custom-prev-btn ${isDisabled ? 'disabled' : ''}`}
      disabled={isDisabled}
    >
      <ChevronLeft />
    </button>
  );

  const renderNextButton = ({ isDisabled }) => (
    <button 
      className={`custom-next-btn ${isDisabled ? 'disabled' : ''}`}
      disabled={isDisabled}
    >
      <ChevronRight />
    </button>
  );

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          autoPlayInterval={3000}
          infinite
          disableDotsControls={false}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
          animationType="fadeout"
          animationDuration={800}
        />
      </div>
    </div>
  );
};

export default Carrusel;