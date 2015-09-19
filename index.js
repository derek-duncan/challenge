'use strict';

import koa from 'koa';
import logger from 'koa-logger';
import views from 'koa-views';
import serve from 'koa-static-folder';

import path from 'path';
import Iso from 'iso';
import createLocation from 'history/lib/createLocation';
import co from 'co';
import Promise from 'bluebird';
import { RoutingContext, match } from 'react-router';
import React from 'react/addons';

import alt from 'src/alt';
import reactRoutes from 'src/routes/client';

var app = koa();

// Log dev to the console
app.use(logger());

// Setup views engin
app.use(views('src/views', {
  map: {
    html: 'jade'
  },
  default: 'jade'
}));

// Static routes: Public directory
app.use(serve('./public'));

// TODO: Setup Alt according to the example and create a folder structure
app.use(function* (next) {

  // takes local data and seeds react stores
  alt.bootstrap(JSON.stringify(this.state.data || {}));
  let iso = new Iso();


  // react-router runs the url of the request
  let routeObject = { routes: reactRoutes, location: createLocation(this.url) };
  let [redirectLocation, renderProps] = yield Promise.promisify(match)(routeObject);

  // uses iso to render and pick back up on the client
  const node = React.renderToString(<RoutingContext {...renderProps}/>);
  iso.add(node, alt.flush());
  yield this.render('layout', { html: iso.render() });

});

app.listen(3000, () => {
  console.log('Challenge has started');
});
