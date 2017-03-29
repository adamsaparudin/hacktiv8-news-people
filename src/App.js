import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import newsReducer from './reducer/News'

const storeNews = createStore(newsReducer)

import People from './People'
import Home from './Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={storeNews}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/people" component={People} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
