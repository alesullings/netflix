import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube, faInstagramSquare } from '@fortawesome/free-brands-svg-icons' 

class Footer extends React.Component {
  render() {
    return(
      <div className="footer">
        <div className="socialMedia">
          <FontAwesomeIcon icon={faFacebook} className="socialMediaIcon" />
          <FontAwesomeIcon icon={faInstagramSquare} className="socialMediaIcon" />
          <FontAwesomeIcon icon={faTwitter} className="socialMediaIcon" />
          <FontAwesomeIcon icon={faYoutube} className="socialMediaIcon" />
        </div>
        <div className="footerLinks">
          <div className="column">
            <span className="link">Audio y subtitulos</span>
            <span className="link">Audio descriptivo</span>
            <span className="link">Centro de ayuda</span>
          </div>
          <div className="column">
            <span className="link">Prensa</span>
            <span className="link">Relaciones con inversionistas</span>
            <span className="link">Empleo</span>
          </div>
          <div className="column">
            <span className="link">Privacidad</span>
            <span className="link">Avisos legales</span>
            <span className="link">Preferencias de cookies</span>
          </div>
          <div className="column">
            <span className="link">Tarjetas de regalo</span>  
            <span className="link">Información corporativa</span>
            <span className="link">Términos de uso</span>
          </div>
        </div>
        <div className="serviceCodeLink">
          Código de servicio
        </div>
        <span className="copyright">
          © 2020 Courflix
        </span>   
      </div>
    )
  }
}

export default Footer;