import { createSlice } from '@reduxjs/toolkit';

const saveSongsList = (state, action) => {
  state.songs = action.payload;
};

// REDUCER
const songsSlice = createSlice({
  name: 'songs',
  initialState: {
    songs: [],
  },
  reducers: {
    saveSongs: saveSongsList,
  },
});

// ACTIONS
const { saveSongs } = songsSlice.actions;

// SELECTOR
const selectSongsList = ({ songs }) => songs.songs;

const songsSliceReducer = songsSlice.reducer;

export { songsSliceReducer, saveSongs, selectSongsList };
