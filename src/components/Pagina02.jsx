import React, { useEffect, useState } from "react";
import "./Pagina02.css";

export default function Pagina02() {
  const [personagens, setPersonagens] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters?page=${pagina}`)
      .then((res) => res.json())
      .then((data) => setPersonagens(data.items))
      .catch((err) => console.error("Erro ao buscar personagens", err));
  }, [pagina]);

  return (
    <div className="pagina2-container">
      <h1>Personagens Dragon Ball</h1>

      <div className="botoes-paginacao">
        <button onClick={() => setPagina((prev) => Math.max(prev - 1, 1))}>Anterior</button>
        <span>Página {pagina}</span>
        <button onClick={() => setPagina((prev) => prev + 1)}>Próxima</button>
      </div>

      <div className="personagens-grid">
        {personagens.map((personagem) => (
          <div className="card" key={personagem.id}>
            <img src={personagem.image} alt={personagem.name} />
            <h3>{personagem.name}</h3>
            <p><strong>Ki:</strong> {personagem.ki}</p>
            <p><strong>Max Ki:</strong> {personagem.maxKi}</p>
            <p><strong>Race:</strong> {personagem.race}</p>
            <p><strong>Gender:</strong> {personagem.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
