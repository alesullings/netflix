import React from 'react';
import series from '../data/series.json';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Slider from 'react-slick';
import './style.scss';

class SelectedContent extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      episodes: []
    }
    
    this.settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      speed: 500,
      accessibility: true
    }

  }
 
  componentDidMount() {
    const filteredContent = series.content.filter((serie) => {
      return serie.id == this.props.match.params.id;
    });

    this.setState({
      content: filteredContent[0],
      episodes: filteredContent[0].episodes
    })
  }
  
  render() {
    
    return( 
      <>
        <Navbar />
        <Hero content={this.state.content} />
        <div className="carousel">
          <h3 className="carouselTitle">Temporada 1</h3>
          <Slider {...this.settings} >
            {this.state.episodes.map((episode, key) => {
              return(
              <div>
                <img src={episode.episodeThumbnail} key={key} />
              </div>
              )
            })}
          </Slider>
        </div>
      </>
    )
  }
}

export default SelectedContent;