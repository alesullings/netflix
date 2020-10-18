import React from 'react';
import './App.scss';
import series from './data/series.json';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      content: {
        title: "BREAKING BAD",
        netflixOriginal: false,
        backgroundImg: "https://estaticos.elperiodico.com/resources/jpg/0/4/bryan-cranston-aaron-paul-una-escena-serie-breaking-bad-1516470621440.jpg",
        synopsis: 'Un profesor de Química de secundaria con cáncer terminal se asocia a un exestudiante para asegurar el futuro de su familia al fabricar y vender metanfetamina.'
      },
      keepWatching: []
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
    
    const stringifiedSeries = localStorage.getItem('series');
    if (stringifiedSeries) {
      const series = JSON.parse(stringifiedSeries);
     
      this.setState({
        keepWatching: series
      })
    }    
  }


  render() {
    const {content, keepWatching} = this.state;
    return(
      <>
        <Navbar />
        <Hero content={content} />
        <div className="keepWatching">
          <h3 id="Recientes" className="carouselTitle">Seguir viendo</h3>
          <Slider {...this.settings}>
            {keepWatching.map((element, key) => {
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
        {series.categories.map((category, key) => {
          return(
            <Carousel key={key} category={category} />
          )
        })}
      </>
    )
  }
}

export default App;