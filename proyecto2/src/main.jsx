import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "../src/components/css/header.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>

  <>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </>

  //     </StrictMode>,
);
