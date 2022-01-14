import React, { FC } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { history } from '@project/libs/utils';
import {
  Homepage,
  WalletPage,
} from 'pages';
import { ProfilePage } from 'pages/Profile';
import { VerificationPage } from 'pages/VerificationPage';
import { RouteLink } from '../../constants/routes';

const MainRouter: FC = () => (
  <Router history={history}>
    <Switch>
      <Route
        path={RouteLink.home}
        exact
        component={Homepage}
      />
      <Route
        path={RouteLink.wallet}
        exact
        component={WalletPage}
      />
      <Route
        path={RouteLink.profile}
        exact
        component={ProfilePage}
      />
      <Route
        path={RouteLink.verification}
        exact
        component={VerificationPage}
      />
    </Switch>
  </Router>
);

export { MainRouter };
