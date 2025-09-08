import React from "react";
import Header from "./components/Header";
import "./index.css";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const pageStyle = {
    background: " linear-gradient(135deg, #051b44ff 0%, #000310 100%)",
    minHeight: "100vh",
    width: "100%",
  };
  return (
    <div style={pageStyle}>
      <AppRoutes />
      <Footer></Footer>
    </div>
  );
};

export default App;
