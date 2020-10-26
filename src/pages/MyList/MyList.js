import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import './style.scss';

class MyList extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    
    const stringifiedList = localStorage.getItem('list');
    if (stringifiedList) {
      const list = JSON.parse(stringifiedList);
     
      this.setState({
        list: list
      })
    }    
  }
  
  render() {
    const { list } = this.state;
    return(
      <>
        <Navbar className="navbar" />
        <div className="myList">
          <h2 className="sectionTitle">Mi lista</h2>
          <div className="seriesWrapper">
            {list.map((element, key) => {
                  return(
                    <Link to={`/content/${element.id}`}>
                      <div className="imgContainer" key={key}>
                        <img className="serieImg" src={element.thumbnail} />
                      </div>
                    </Link>
                  )
                })}
          </div>
        </div>
        <Footer className="footer" />
      </>
    )
  }
}

export default MyList;