import React from 'react';
import series from '../data/series.json';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

class SelectedContent extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      episodes: [],
      navToggle: false,
      showNavLinks: false
    }
    
    this.settings = {
      slidesToShow: 4,
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
    window.scrollTo(0, 0);
    
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
        <Navbar showNavLinks={this.state.showNavLinks} handleCallback={ () => this.handleCallback() } />
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
              <div className="imgWrapper" key={key}>
                <img className="serieImg" src={episode.episodeThumbnail} key={key} />
              </div>
              )
            })}
          </Slider>
          <div className="mobileEpisodes">
            {episodes.map((episode, key) => {
              return(
                <div className="episodeWrapper" key={key}>
                  <div className="serieImg" key={key} 
                    style={{
                      background: "url(" + episode.episodeThumbnail + ")" + "0px 0px/cover"
                    }}>
                   <FontAwesomeIcon icon={faPlay} className="playButton" />
                  </div>
                  <div className="serieInfo">
                    <h3 className="episodeTitle">
                      {episode.episodeTitle}
                      </h3>
                    <p className="episodeSynopsis">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default SelectedContent;