'use strict';

import Iso from 'iso';
import Router from 'react-router';
import React from 'react';
import Promise from 'bluebird';
import co from 'co';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import reactRoutes from 'src/routes/routes.react';
import alt from 'src/alt';
Promise.promisifyAll(Iso);

co(function* () {

  return yield Iso.bootstrap();
}).then(([state, _, container]) => {

  alt.bootstrap(state);

  let history = createBrowserHistory()
  React.render(<Router history={history}>{reactRoutes}</Router>, container);

});
