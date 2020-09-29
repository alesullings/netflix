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
        title: "BLACK SUMMER",
        netflixOriginal: true,
        backgroundImg: "https://i.postimg.cc/jtW1Rgs6/portada.png",
        synopsis: 'Una ansiada luna de miel. Un asesinato terrible. Varios sospechosos. Si sobreviven, seran unas vacaciones de ensueno.'
      }
    } 
  }
  

  render() {
    console.log(series.categories);
    return(
      <>
        <Navbar />
        <Hero content={this.state.content} />
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