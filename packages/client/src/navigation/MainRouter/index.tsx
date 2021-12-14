import React, { FC } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { history } from '@project/libs/utils';
import {
  Homepage,
} from 'pages';
import { RouteLink } from '../../constants/routes';

const MainRouter: FC = () => (
  <Router history={history}>
    <Switch>
      <Route
        path={RouteLink.home}
        exact
        component={Homepage}
      />
    </Switch>
  </Router>
);

export { MainRouter };
