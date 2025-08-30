import React from "react";
import Header from "./components/Header";
// Import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import Carousel from "./components/carrusel"; 
import Carruseles from "./components/carruseles";
import './index.css'
const App = () => { const pageStyle = {
       background:' linear-gradient(135deg, #051b44ff 0%, #000310 100%)',
        minHeight: '100vh', 
        width: '100%',
      };
  return (
    <div style={pageStyle}>
      <Header />
      <AppRoutes />
      <Carousel />
<Carruseles></Carruseles>
      {/* <Footer /> */}
    </div>
  );
};

export default App;