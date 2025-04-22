import { useEffect, useState } from 'react';
import './Pagina02.css'; // Arquivo CSS separado para a página

function Pagina2() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters')
      .then(response => response.json())
      .then(data => setPersonagens(data.items));
  }, []);

  return (
    <div className="pagina2-container">
      <h2 className="titulo">Personagens Dragon Ball</h2>
      <div className="personagens-grid">
        {personagens.slice(0, 12).map((p, index) => (
          <div key={index} className="card">
            <img src={p.image} className="card-img" alt={p.name} />
            <div className="card-info">
              <h5 className="card-title">{p.name}</h5>
              <p>Raça: {p.race}</p>
              <p>Origem: {p.origin}</p>
              <p>Ki: {p.ki}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Pagina2;
