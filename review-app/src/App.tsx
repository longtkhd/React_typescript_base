import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Home from './container/Home/Home'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          {/* <Header></Header> */}
          <React.Fragment>
            <Switch>
              <Route path="/" exact component={Home} />



            </Switch>
          </React.Fragment>
        </div>
      </Router>

    </div>
  );
}

export default App;
