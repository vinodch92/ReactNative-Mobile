import colors from './colors';
import local from './local';
import { store } from './store';

const config = {
  colors,
  ...local,
  store,
};

export default config;
