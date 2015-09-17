import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.jsx';
import Home from './Home.jsx';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
  </Route>
);

export default routes;
