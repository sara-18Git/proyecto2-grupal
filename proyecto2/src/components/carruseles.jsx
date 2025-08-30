// carruseles.jsx
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './css/carruseles.css'

const Carruseles = () => {
  const items = [
    {
      id: 1,
      image: "https://es.digitaltrends.com/wp-content/uploads/2024/07/Bellingham-EA-Sports-FC.jpg?fit=720%2C405&p=1",
      title: "Producto 1",
      description: "Descripción corta del producto 1",
      price: "$29.99"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200/50C878/FFFFFF?text=Producto+2",
      title: "Producto 2",
      description: "Descripción corta del producto 2",
      price: "$39.99"
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Producto+3",
      title: "Producto 3",
      description: "Descripción corta del producto 3",
      price: "$49.99"
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x200/FFD166/FFFFFF?text=Producto+4",
      title: "Producto 4",
      description: "Descripción corta del producto 4",
      price: "$19.99"
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300x200/6A0572/FFFFFF?text=Producto+5",
      title: "Producto 5",
      description: "Descripción corta del producto 5",
      price: "$59.99"
    },
    {
      id: 6,
      image: "https://via.placeholder.com/300x200/118AB2/FFFFFF?text=Producto+6",
      title: "Producto 6",
      description: "Descripción corta del producto 6",
      price: "$24.99"
    }
  ];
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const renderItems = items.map((item) => (
    <div key={item.id} className="carruseles-card">
      <div className="carruseles-image-container">
        <img 
          src={item.image} 
          alt={item.title} 
          className="carruseles-image"
        />
      </div>
      <div className="carruseles-content">
        <h3 className="carruseles-title">{item.title}</h3>
        <p className="carruseles-description">{item.description}</p>
        <span className="carruseles-price">{item.price}</span>
      </div>
    </div>
  ));

  return (
    <div className="carruseles-container">
      <h2 className="carruseles-heading">Productos Destacados</h2>
      <AliceCarousel
        mouseTracking
        items={renderItems}
        responsive={responsive}
        controlsStrategy="alternate"

        infinite
        disableDotsControls
renderPrevButton={() => (
  <button className="carruseles-button carruseles-button-prev">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path d="M15.5 5l-7 7 7 7" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>
  </button>
)}
renderNextButton={() => (
  <button className="carruseles-button carruseles-button-next">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path d="M8.5 5l7 7-7 7" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>
  </button>
)}
      />
    </div>
  );
};

export default Carruseles;