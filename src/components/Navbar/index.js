import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick(e) {
    this.props.handleCallback();
    e.stopPropagation();
  }

  preventCloseMenu(e) {
    e.stopPropagation();
  }

  render() {
    const {showNavLinks} = this.props;

    return(
      <>
        <header className="header" onClick={(e) => this.preventCloseMenu(e)} >
          {showNavLinks && (

          <FontAwesomeIcon icon={faBars} className="hamburgerMenu" onClick={(e) => this.handleClick(e)} />
          )}
          <Link to="/">
            <img className="courflixLogo" src="https://i.postimg.cc/0547t0FP/courflix-logo.png" />
          </Link>
          {showNavLinks && (
            <nav className="navbar">
              <a href="#" className="sectionLink">Inicio</a>
              <a href="#Series" className="sectionLink">Series</a>
              <a href="#Peliculas" className="sectionLink">Peliculas</a>
              <a href="#Recientes" className="sectionLink">Seguir viendo</a>
              <Link to="/mylist">
                <a className="sectionLink">Mi lista</a>
              </Link>
            </nav>
          )}
        </header>
      </>
    )
  }
}

export default Navbar;