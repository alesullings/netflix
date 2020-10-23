import React from 'react';
import series from '../data/series.json';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Slider from 'react-slick';
import './style.scss';
import MobileNav from '../components/MobileNav';

class SelectedContent extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      episodes: [],
      navToggle: false
    }
    
    this.settings = {
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      speed: 500,
      accessibility: true,
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
            slidesToScroll: 1
          }
        }
      ]
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
  
  handleCallback() {
    this.setState(state => ({
      navToggle: !state.navToggle
    }))
    
  }
  
  handleClick() {
    this.setState({
      navToggle: false
    })
  }

  render() {
    const { content, episodes, navToggle } = this.state;
    return( 
      <div className="selectedContent" onClick={() => this.handleClick()} >
        <Navbar handleCallback={ () => this.handleCallback() } />
        {navToggle && (
          <MobileNav />
        )}
        <Hero content={content} />
        <div className="carousel">
          {content.category === "Series" && (
            <h3 className="carouselTitle">Temporada 1</h3>
          )}
          <Slider {...this.settings} className="episodesCarousel">
            {episodes.map((episode, key) => {
              return(
              <div className="imgContainer">
                <img className="serieImg" src={episode.episodeThumbnail} key={key} />
              </div>
              )
            })}
          </Slider>
          <div className="mobileEpisodes">
            {episodes.map((episode, key) => {
              return(
                <div className="episodeWrapper">
                  <img className="serieImg" src={episode.episodeThumbnail} key={key} />
                  <div className="serieInfo">
                    <h3 className="episodeTitle">{episode.episodeTitle}</h3>
                    <p className="episodeSynopsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default SelectedContent;