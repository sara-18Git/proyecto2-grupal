import React from "react"
import "../components/css/error404.css"

const Error404Page = () => {
  return (
    <div className="wrap">
      <div className="card" role="main" aria-labelledby="errTitle">
        <div className="big-row" aria-hidden="true">
          <div className="big-digit">4</div>

          <div className="file-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Icono de archivo">
              <g fill="none" stroke="#000" strokeWidth="3" strokeLinejoin="miter">
                <path d="M10 8h28l14 14v30a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" fill="#2f6f78"/>
                <path d="M38 8v14h14" stroke="#000" strokeWidth="2.5" fill="none"/>
                <g stroke="#000" strokeWidth="2.8" strokeLinecap="square">
                  <path d="M28 16h4M30 14v6" />
                  <rect x="22" y="30" width="3" height="3" fill="#000"/>
                  <rect x="36" y="30" width="3" height="3" fill="#000"/>
                  <rect x="28" y="36" width="8" height="2" fill="#000"/>
                </g>
                <rect x="18" y="14" width="28" height="36" fill="none" stroke="#000" strokeWidth="2.6"/>
              </g>
            </svg>
          </div>

          <div className="big-digit">4</div>
        </div>

        <h1 id="errTitle">ERROR 404</h1>

        <p className="lead">Lo Siento Esta pagina no se pudo encontrar</p>

        <a className="btn" href="/" role="button" aria-label="Volver a inicio">
          Volver A Inicio
        </a>
      </div>
    </div>
  )
}

export default Error404Page
