import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import People from './People'
import Home from './Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/people" component={People} />
        </div>
      </Router>
    );
  }
}

export default App;
