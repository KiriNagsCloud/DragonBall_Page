import React, { useEffect, useState } from "react";
import "./Pagina02.css";

export default function Pagina02() {
  const [personagens, setPersonagens] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters?page=${pagina}`)
      .then((res) => res.json())
      .then((data) => setPersonagens(data.items))
      .catch((err) => console.error("Erro ao buscar personagens", err));
  }, [pagina]);

  const filteredPersonagens = personagens.filter((personagem) => /* Filtra os personagens pra não ter bagunça */
    personagem.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  return (
    <div className="pagina2-container">
      <h1>Personagens Dragon Ball</h1>

      <div className="barra-pesquisa"> 
        <input
          type="text" 
          placeholder="Pesquise por personagem..." /* Pesquisa rapai */
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="botoes-paginacao">
        {pagina > 1 && ( /* o toque tirou o botão de anterior :v */
          <button onClick={() => setPagina((prev) => Math.max(prev - 1, 1))}>
            Anterior
          </button>
        )}
        <span>Página {pagina}</span>
        {pagina < 6 && (
          <button
            onClick={() => setPagina((prev) => Math.min(prev + 1, 6))} /* Agora não tem mais página 7 hehehe e.e */
          >
            Próxima
          </button>
        )}
      </div>

      <div className="personagens-grid">
        {filteredPersonagens.length === 0 ? (
          <p>Não há personagens encontrados!</p>
        ) : (
          filteredPersonagens.map((personagem) => (
            <div className="card" key={personagem.id}>
              <img src={personagem.image} alt={personagem.name} />
              <h3>{personagem.name}</h3>
              <p><strong>Ki:</strong> {personagem.ki}</p>
              <p><strong>Max Ki:</strong> {personagem.maxKi}</p>
              <p><strong>Race:</strong> {personagem.race}</p>
              <p><strong>Gender:</strong> {personagem.gender}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
