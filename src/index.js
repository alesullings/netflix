import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SelectedContent from './pages/SelectedContent';
import MyList from './pages/MyList/MyList';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/content/:id" component={SelectedContent} />
    <Route exact path="/mylist" component={MyList} /> 
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
