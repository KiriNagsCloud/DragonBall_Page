// src/components/req.jsx
import React, { useEffect, useState } from 'react';
import styles from './req.module.css';

function Req() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters')
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.items);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao buscar personagens:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className={styles.loading}>Carregando personagens...</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Personagens de Dragon Ball</h2>
      <ul className={styles.characterList}>
        {characters.slice(0, 10).map((char) => (
          <li key={char.id} className={styles.characterItem}>
            <strong>{char.name}</strong> - {char.race}
            <br />
            <img src={char.image} alt={char.name} className={styles.characterImage} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Req;
