import { createProvider } from 'reactn';
import { LOADING_KEY } from './constants';

const INITIAL_STATE = {
  resources: {},
  [LOADING_KEY]: false,
};

const Provider = createProvider(INITIAL_STATE);

export default Provider;
