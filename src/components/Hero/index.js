import React from 'react';
import './style.scss';

class Hero extends React.Component {

  handleClick() {
    const { content } = this.props;
   
    const stringifiedList = localStorage.getItem('list');
   
    if (stringifiedList) {
      const parsedList = JSON.parse(stringifiedList)

      if(!parsedList.some(serie => serie.id === content.id)) {
        parsedList.push(content)
        const newList = JSON.stringify(parsedList)
        localStorage.setItem('list', newList)
      }
      
    } else {
      const parsedList = [content]
      const newList = JSON.stringify(parsedList)
      localStorage.setItem('list', newList)
    }

  }

  render() { 
    const {title, netflixOriginal, backgroundImg, synopsis } = this.props.content;
    return (
      <div className="background" style={{background: "url(" + backgroundImg + ")" + "0px 0px/cover"}} >
        <div className="gradient">
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
              <div className="button" onClick={() => this.handleClick() }>
                + mi lista
              </div>
            </div>
            <p id="Recientes" className="synopsis">
              {synopsis}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;