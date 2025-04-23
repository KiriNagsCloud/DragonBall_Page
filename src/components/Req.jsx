import React, { useEffect, useState } from "react";
import styles from "./Req.module.css";

export default function Req() {
  const [personagens, setPersonagens] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters?page=${pagina}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonagens(data.items || []);
      })
      .catch((err) => console.error("Erro ao buscar personagens:", err));
  }, [pagina]);

  return (
    <div className={styles.container}>
      <h2>Personagens Dragon Ball</h2>

      {/* Botões de navegação */}
      <div className={styles.navegacao}>
        <button
          className="btn btn-outline-primary me-2"
          onClick={() => setPagina((prev) => Math.max(1, prev - 1))}
        >
          Página anterior
        </button>
        <span>Página {pagina}</span>
        <button
          className="btn btn-outline-primary ms-2"
          onClick={() => setPagina((prev) => prev + 1)}
        >
          Próxima página
        </button>
      </div>

      {/* Renderização Condicional */}
      {personagens.length > 0 ? (
        <div className={styles.grid}>
          {personagens.map((personagem) => (
            <div key={personagem.id} className={styles.card}>
              <img
                src={personagem.image}
                alt={personagem.name}
                className={styles.imagem}
              />
              <h4>{personagem.name}</h4>
              <p><strong>Ki:</strong> {personagem.ki}</p>
              <p><strong>Raça:</strong> {personagem.race}</p>
              <p><strong>Universo:</strong> {personagem.universe}</p>
              <p><strong>Gênero:</strong> {personagem.gender}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhum personagem encontrado.</p>
      )}
    </div>
  );
}
