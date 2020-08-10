import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('@reduxjs/toolkit', () => ({
  configureStore: jest.fn(() => Promise.resolve()),
  combineReducers: jest.fn(() => Promise.resolve()),
  createSlice: jest.fn(() => Promise.resolve()),
  getDefaultMiddleware: jest.fn(() => Promise.resolve()),
  createSagaMiddleware: jest.fn(),
  createAction: jest.fn(),
}));

jest.mock('../app/config/store', () => ({}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => Promise.resolve()),
  useSelector: jest.fn((data) => data),
}));

jest.mock('../app/state/SongsState', () => {
  return {
    saveSongs: jest.fn(),
  };
});

jest.mock('react-redux', () => ({
  useStore: () => '',
  useDispatch: () => '',
}));

jest.mock('redux', () => ({
  combineReducers: () => '',
}));
