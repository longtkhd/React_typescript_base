import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Home from './container/Home/Home'
import LoginPage from './container/Login/Login'
import PrivateRoute from './components/PrivateRoute/index'

// const LoginPage = lazy(() => import("./container/Login/Login"));


import './App.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <React.Fragment>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" exact component={LoginPage} />
          </Switch>
        </React.Fragment>

      </Router>

    </div>
  );
}

export default App;
