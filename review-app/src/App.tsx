import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from './history';
import Home from './container/Home/Home'
import LoginPage from './container/Login/Login'
import PrivateRoute from './components/PrivateRoute/index'

// const LoginPage = lazy(() => import("./container/Login/Login"));


import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter >

        <React.Fragment>
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <PrivateRoute exact path="/" component={Home} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>



  );
}

export default App;
