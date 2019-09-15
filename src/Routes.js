import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main } from './layouts';
import { Dashboard } from './views';

import Disasters from './disasters/Disasters';
import Plans from './plans/Plans';
import Map from './map/Map';
import Settings from './settings/Settings';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={Dashboard}
        exact
        layout={Main}
        path="/dashboard"
      />
      <RouteWithLayout
        exact path="/disasters"
        layout={Main}
        component={Disasters}
      />
      <RouteWithLayout
        exact path="/plans"
        layout={Main}
        component={Plans}
      />
      <RouteWithLayout
        exact path="/map"
        layout={Main}
        component={Map}
      />
      <RouteWithLayout
        exact path="/settings"
        layout={Main}
        component={Settings}
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
