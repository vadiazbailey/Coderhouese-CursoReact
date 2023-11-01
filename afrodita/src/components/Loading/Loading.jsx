import React from "react";
import "./Loading.css";
import { PiHandsPrayingBold } from 'react-icons/pi';


const Loading = () => {
  return (
    <div className="center">
      <div className="circule">
        <div className="loader" id="loader1"></div>
        <div className="loader" id="loader2"></div>
        <div className="loader" id="loader3"></div>
        <div className="loader" id="loader4"></div>

        <span id="text">
          <iframe
            title="Giphy Embed"
            src="https://giphy.com/embed/PaG51G9OKKdKU"
            width="80"
            height="80"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            sandbox="allow-scripts" // Esto deshabilitará la interacción con el iframe
          ></iframe>
        </span>
      </div>
      <div className="messageLoading">
        <p> Estoy cargando, paciencia <PiHandsPrayingBold /> ... </p>
      </div>
    </div>
  );
};

export default Loading;