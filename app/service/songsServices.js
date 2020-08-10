import { apiRequest } from './service';
import { SONGS_LIST } from './apiUrls';

export const songsLists = () =>
  apiRequest({
    apiUrl: SONGS_LIST,
    method: 'GET',
  });
