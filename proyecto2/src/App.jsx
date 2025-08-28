import React from "react";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div>
      <Header></Header>
      <AppRoutes></AppRoutes>
      {/* <Footer></Footer> */}
    </div>
  );
};
export default App;
