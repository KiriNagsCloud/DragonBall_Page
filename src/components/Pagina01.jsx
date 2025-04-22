import { useState } from 'react';
import './Pagina01.css'; // Arquivo CSS separado para a página

function Pagina01() {
  const [showDescription, setShowDescription] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="pagina1-container">
      <img src="https://upload.wikimedia.org/wikipedia/pt/0/01/Dragon_Ball_Z_Logo.png" alt="Dragon Ball" className="logo" />
      <h2 className="titulo">Bem-vindo ao universo Dragon Ball!</h2>
      
      <button className="botao azul" onClick={() => setShowDescription(!showDescription)}>
        {showDescription ? 'Esconder Descrição' : 'Mostrar Descrição'}
      </button>
      {showDescription && <p className="descricao">Dragon Ball é um anime incrível cheio de ação, aventura e personagens icônicos!</p>}

      <button className="botao laranja" onClick={() => setShowVideo(!showVideo)}>
        {showVideo ? 'Esconder Vídeo' : 'Mostrar Vídeo'}
      </button>
      {showVideo && (
        <div className="video">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/dCq8OCap5zM" title="Vídeo do Dragon Ball" frameBorder="0" allowFullScreen></iframe>
        </div>
      )}
    </div>
  );
}

export default Pagina01;
