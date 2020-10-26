import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

class MobileNav extends React.Component {
  render() {
    return(
      <header className="mobileHeader">
        <nav className="mobileNavbar">
          <a href="#" className="sectionLink">Inicio</a>
          <a href="#Series" className="sectionLink">Series</a>
          <a href="#Peliculas" className="sectionLink">Peliculas</a>
          <a href="#Recientes" className="sectionLink">Seguir viendo</a>
          <Link to="/mylist" className="listLink">
            <a className="sectionLink">Mi lista</a>
          </Link>
        </nav>
      </header>
    )
  }
}

export default MobileNav;