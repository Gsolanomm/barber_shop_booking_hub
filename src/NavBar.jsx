import React from 'react';
import './NavBar.css'; // Archivo de estilos
import barberIcon from './imagenes/barberia.jpg'; // Ruta a la imagen de la barbería

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={barberIcon} alt="Barbería" width="40" />
      </div>
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Inicio</a></li>
        <li className="nav-item"><a href="/acerca">Acerca</a></li>
        <li className="nav-item"><a href="/servicios">Servicios</a></li>
        <li className="nav-item"><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;

