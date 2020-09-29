import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return(
      <div className="navbar">
        <Link to="/">
          <img className="courflixLogo" src="https://i.postimg.cc/0547t0FP/courflix-logo.png" />
        </Link>
        <div className="linksWrapper">
          <a href="#" className="sectionLink">Inicio</a>
          <a href="#Series" className="sectionLink">Series</a>
          <a href="#Peliculas" className="sectionLink">Peliculas</a>
          <a href="#Recientes" className="sectionLink">Vistos recientemente</a>
          <a className="sectionLink">Mi lista</a>
        </div>
      </div>
    )
  }
}

export default Navbar;