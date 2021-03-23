import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';


export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
      <Switch>
        <Route path='/register'component={Register} />
      </Switch>
      <Switch>
        <ProtectedRoute path='/home'component={Home} />
      </Switch>
  </Router>
  );
};