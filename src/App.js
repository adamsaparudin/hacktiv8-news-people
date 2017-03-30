import React, { Component } from 'react';
import Thunk from 'redux-thunk'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducer'
import People from './People'
import Home from './Home'
import './App.css';

const storeWithMiddleware = applyMiddleware(Thunk)(createStore)

class App extends Component {
  render() {
    return (
      <Provider store={storeWithMiddleware(reducers)}>
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
