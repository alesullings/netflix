import React from 'react';
import './style.scss';

class MobileNav extends React.Component {
  render() {
    return(
      <header className="mobileHeader">
        <nav className="mobileNavbar">
          <a href="#" className="sectionLink">Inicio</a>
          <a href="#Series" className="sectionLink">Series</a>
          <a href="#Peliculas" className="sectionLink">Peliculas</a>
          <a href="#Recientes" className="sectionLink">Seguir viendo</a>
          <a className="sectionLink">Mi lista</a>
        </nav>
      </header>
    )
  }
}

export default MobileNav;