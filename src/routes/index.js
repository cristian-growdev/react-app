import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './routeWrapper';

import LoginPage from '../views/login';
import HomePage from '../views/home';
import TablePage from '../views/table';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} isPrivate />
        <Route path="/table" exact component={TablePage} isPrivate />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};
