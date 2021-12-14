import { connectRouter } from 'connected-react-router';
import { history } from '@project/libs/utils';
import auth from './auth';
import wallet from './wallet/reducer';

export default {
  router: connectRouter(history),
  auth,
  wallet,
};
