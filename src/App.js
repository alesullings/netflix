import React from 'react';
import './App.scss';
import series from './data/series.json';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      content: {
        title: "BREAKING BAD",
        netflixOriginal: false,
        backgroundImg: "https://estaticos.elperiodico.com/resources/jpg/0/4/bryan-cranston-aaron-paul-una-escena-serie-breaking-bad-1516470621440.jpg",
        synopsis: 'Un profesor de Química de secundaria con cáncer terminal se asocia a un exestudiante para asegurar el futuro de su familia al fabricar y vender metanfetamina.'
      }
    } 
  }
  

  render() {
    const {content} = this.state;
    return(
      <>
        <Navbar />
        <Hero content={content} />
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