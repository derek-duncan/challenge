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
import reactRoutes from 'src/routes/routes.react';

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
  let self = this;
  let viewData;
  try {
    viewData = JSON.stringify(this.state.data || {});
  } catch(err) {
    console.log(err)
  }
  alt.bootstrap(viewData);
  let iso = new Iso();
  let routeObject = {
    routes: reactRoutes,
    location: createLocation(self.url)
  }

  let [redirectLocation, renderProps] = yield Promise.promisify(match)(routeObject);
  if (renderProps) {
    const node = React.renderToString(<RoutingContext {...renderProps}/>);
    iso.add(node, {});
    yield this.render('layout', { html: iso.render() });
  } else {
    self.status = 404;
    self.body = 'Not Found';
  }

});

app.listen(3000, () => {
  console.log('Challenge has started');
});
