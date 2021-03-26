import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './components/auth/Login';
import Home from './components/home/Home';
import Register from './components/auth/Register';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';


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