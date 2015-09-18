import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'src/components/App.jsx';
import Home from 'src/components/Home.jsx';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
  </Route>
);

export default routes;
