import React from "react";
import { Link } from "react-router-dom";
import styles from "./menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>Dragon Ball Page</h1>
      <ul className={styles.menu}>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/personagens">Personagens</Link></li>
      </ul>
    </nav>
  );
}

{(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Dragon Ball Page</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Página 1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pagina2">Página 2</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
