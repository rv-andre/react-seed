import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './../Home/index';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;