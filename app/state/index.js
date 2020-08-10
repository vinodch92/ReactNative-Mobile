import { combineReducers } from 'redux';
import * as SongsState from './SongsState';

const rootReducer = combineReducers({
  songs: SongsState.songsSliceReducer,
});
export { rootReducer, SongsState };
