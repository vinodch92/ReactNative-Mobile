import { all, fork } from 'redux-saga/effects';
import { watchSongsList } from './SongsSaga';

export default function* rootSaga() {
  yield all([fork(watchSongsList)]);
}
