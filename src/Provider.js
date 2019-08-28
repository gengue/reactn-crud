import { createProvider } from 'reactn';
import { APP_KEY } from './constants';

const INITIAL_STATE = {
  [APP_KEY]: {
    resources: {},
  },
};

const Provider = createProvider(INITIAL_STATE);

export default Provider;
