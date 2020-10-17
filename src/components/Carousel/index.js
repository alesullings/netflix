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
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      speed: 500,
      accessibility: true,
      arrows: true,
      
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
    console.log(element);
  }


  render() {
    const {category} = this.props;
    const {content} = this.state;
    return(
      <div className="carousel">
        <h3 id={category} className="carouselTitle">{category}</h3>
        <Slider {...this.settings}>
          {content.map((element, key) => {
            return(
              <Link to={`/content/${element.id}`}>
                <div className="imgContainer" key={key}>
                  <img className="serieImg" src={element.thumbnail} onClick={(element) => this.handleClick(element) } />
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