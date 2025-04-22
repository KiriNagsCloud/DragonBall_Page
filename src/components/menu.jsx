import style from './menu.module.css';
import { Link } from 'react-router-dom';

export const Menu = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${style.navBar}`}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">{props.option01}</Link>
            <a className="nav-link" href="#s2">{props.option02}</a> {/* ainda é âncora, se quiser mudar me avisa */}
            <div className="navbar-nav">
  <Link className="nav-link" to="/">{props.option01}</Link>
  <a className="nav-link" href="#s2">{props.option02}</a>
  <Link className="nav-link" to="/contact">{props.option03}</Link>
  
  {/* Link externo para o site da API */}
  <a
    className="nav-link"
    href="https://dragonball-api.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.option04}
  </a>

  <Link className="nav-link" to="/requisicao">{props.option05}</Link>
</div>

            <Link className="nav-link" to="/contact">{props.option03}</Link>
            <Link className="nav-link" to="/dragonball">{props.option04}</Link>
            <Link className="nav-link" to="/requisicao">{props.option05}</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
