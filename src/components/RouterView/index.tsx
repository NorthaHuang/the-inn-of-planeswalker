import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../../routes';
import Card from '../Card';
import NotFoundPage from '../pages/NotFound';

const RoutePages = (): JSX.Element => {
  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.name} {...route} />
      ))}

      <Route path="/card/:code/:number" component={Card} />
      <Route path="/404" component={NotFoundPage} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default RoutePages;
