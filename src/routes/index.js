import React from 'react';
import { Route, Switch } from 'react-router';
import Counter from '../containers/Counter';

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route path="/" component={ Counter } />
    </Switch>
  </div>
);

export default routes;
