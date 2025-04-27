import React, { useState } from "react";
import "./Pagina01.css";

export default function Pagina01() {
  const [showDescription, setShowDescription] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="pagina1-container">
      <div className="imagem-slogan">
        <img
          src="https://freepngimg.com/thumb/dragon_ball/23374-9-dragon-ball-logo-file.png"
          alt="Logo Dragon Ball"
          className="imagem"
        />
        <h2 className="slogan">"Supere seus limites e vá além!"</h2>

        <button
          className="botao"
          onClick={() => setShowDescription(!showDescription)}
        >
          Ver Descrição
        </button>
        {showDescription && (
          <p className="descricao">
            Dragon Ball é uma jornada de força, amizade e superação. Seja você também um guerreiro Z!
          </p>
        )}
      </div>

      <button className="botao-video" onClick={() => setShowVideo(!showVideo)}>
        {showVideo ? "Fechar Vídeo" : "Ver Vídeo"}
      </button>

      {showVideo && (
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/uA3XCB3atxY"
            title="Trailer Dragon Ball"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
