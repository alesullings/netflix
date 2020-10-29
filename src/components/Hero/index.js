import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlay, faCheck } from '@fortawesome/free-solid-svg-icons';

class Hero extends React.Component {

  constructor(props) {
    super(props);
  }


  handleClick() {
    const { content } = this.props;
    const stringifiedList = localStorage.getItem('list');
   
    if (stringifiedList) {
      const parsedList = JSON.parse(stringifiedList)

      if(!parsedList.some(serie => serie.id === content.id)) {
        parsedList.push(content)
        const newList = JSON.stringify(parsedList)
        localStorage.setItem('list', newList)
      } else {
        const filteredList = parsedList.filter((series) => {
          return series.id !== content.id;
        });
        const newList = JSON.stringify(filteredList)
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
    const {content} = this.props;
    const stringifiedList = localStorage.getItem('list');
    const parsedList = JSON.parse(stringifiedList)

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
              <div className="playButton">
                <FontAwesomeIcon icon={faPlay} className="playIcon" />
                Reproducir
              </div>
              <div className="addButton" onClick={() => this.handleClick() }>
                {!parsedList 
                  ? <FontAwesomeIcon icon={faPlus} className="buttonIcon" />
                  : [
                      (parsedList.some(serie => serie.id === content.id)
                      ? <FontAwesomeIcon icon={faCheck} className="buttonIcon" />
                      : <FontAwesomeIcon icon={faPlus} className="buttonIcon" />
                      )
                    ] 
                }
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