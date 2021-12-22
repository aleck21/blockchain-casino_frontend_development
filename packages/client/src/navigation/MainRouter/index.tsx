import { FC } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { history } from '@project/libs/utils';
import {
  Homepage,
} from 'pages';
import { WalletPage } from 'pages';
import { ProfilePage } from 'pages/Profile';
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
    </Switch>
  </Router>
);

export { MainRouter };
