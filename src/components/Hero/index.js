import React from 'react';
import './style.scss';

class Hero extends React.Component {

  render() { 
    const {title, netflixOriginal, backgroundImg, synopsis} = this.props.content;
    return (
      <div className="background" style={{backgroundImage: "url(" + backgroundImg + ")"}} >
        <div className="heroWrapper">
          {netflixOriginal && (
          <span className="netflixOriginal">
            Original de COURFLIX
          </span>
          )}
          <h1 className="serieTitle">
            {title}
          </h1>
          <div className="buttonsWrapper">
            <div className="button">
              Reproducir
            </div>
            <div className="button">
              + mi lista
            </div>
          </div>
          <p className="currentSeason">
            Ve la temporada 1
          </p> 
          <p className="synopsis">
            {synopsis}
          </p>
        </div>
      </div>
    )
  }
}

export default Hero;