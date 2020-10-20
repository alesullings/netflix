import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menuToggleOn: false
    }
  }

  handleClick() {
    this.setState(state => ({
      menuToggleOn: !state.menuToggleOn
    }));
  }

  render() {
    const {menuToggleOn} = this.state;
    
    return(
      <>
        <header className="header">
          <FontAwesomeIcon icon={faBars} className="hamburgerMenu" onClick={() => this.handleClick()} />
          <Link to="/">
            <img className="courflixLogo" src="https://i.postimg.cc/0547t0FP/courflix-logo.png" />
          </Link>
          <nav className="navbar">
            <a href="#" className="sectionLink">Inicio</a>
            <a href="#Series" className="sectionLink">Series</a>
            <a href="#Peliculas" className="sectionLink">Peliculas</a>
            <a href="#Recientes" className="sectionLink">Seguir viendo</a>
            <a className="sectionLink">Mi lista</a>
          </nav>
        </header>
        {menuToggleOn && (
          <header className="mobileHeader">
            <nav className="mobileNavbar">
              <a href="#" className="sectionLink">Inicio</a>
              <a href="#Series" className="sectionLink">Series</a>
              <a href="#Peliculas" className="sectionLink">Peliculas</a>
              <a href="#Recientes" className="sectionLink">Seguir viendo</a>
              <a className="sectionLink">Mi lista</a>
            </nav>
          </header>
        )}
      </>
    )
  }
}

export default Navbar;