import { put, call, takeLatest } from 'redux-saga/effects';
import { songsLists } from '../service/songsServices';
import { SongsState } from '../state';

export function* getSongsLists(action) {
  const apiResponse = yield call(songsLists, action.payload);
  if (apiResponse.response_type === 'success') {
    yield put(SongsState.saveSongs(apiResponse.response));
  }
}

export function* watchSongsList() {
  yield takeLatest('GET_SONGS_LIST', getSongsLists);
}
