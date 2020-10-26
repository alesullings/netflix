import React from 'react';
import './style.scss';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import series from '../../data/series.json';

class Carousel extends React.Component {
  
  constructor(props) {
    super(props);


    this.state = {
      content: []
    }
    
    this.settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      speed: 500,
      accessibility: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    }
  }

  componentDidMount() {
    const filtered = series.content.filter((series) => {
      return series.category == this.props.category;
    });

    this.setState({
      content: filtered
    })
  }

  handleClick(element) {
    
    const stringifiedSeries = localStorage.getItem('series');
   
    if (stringifiedSeries) {
      const parsedSeries = JSON.parse(stringifiedSeries)

      if(!parsedSeries.some(serie => serie.id === element.id)) {
        parsedSeries.push(element)
        const newSeries = JSON.stringify(parsedSeries)
        localStorage.setItem('series', newSeries)
      }
      
    } else {
      const parsedSeries = [element]
      const newSeries = JSON.stringify(parsedSeries)
      localStorage.setItem('series', newSeries)
    }

  }

  render() {
    const {category} = this.props;
    const {content} = this.state;
    return(
      <div id={category} className="carousel">
        <h3 className="carouselTitle">{category}</h3>
        <Slider {...this.settings}>
          {content.map((element, key) => {
            return(
              <Link to={`/content/${element.id}`}>
                <div className="imgContainer" key={key}>
                  <img className="serieImg" src={element.thumbnail} onClick={ () => this.handleClick(element) } />
                </div>
              </Link>
            )
          })}
        </Slider>
      </div>
    )
  }
}

export default Carousel;