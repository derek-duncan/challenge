'use strict';

import Iso from 'iso';
import Router from 'react-router';
import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import reactRoutes from './routes/client';
import alt from './alt';

Iso.bootstrap((state, _, container) => {

  alt.bootstrap(state);

  let history = createBrowserHistory()
  React.render(<Router history={history}>{reactRoutes}</Router>, container);

});
