import React, { useEffect } from 'react';
import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SongsCell } from '../components';
import { selectSongsList } from '../state/SongsState';

const Songs = () => {
  const dispatch = useDispatch();

  const songs = useSelector(selectSongsList);
  useEffect(() => {
    callSongsListApi();
  }, []);

  const callSongsListApi = () => {
    dispatch({ type: 'GET_SONGS_LIST', payload: '' });
  };
  const keyExtractor = (item, index) => `${item.trackNumber}${index}`;
  const renderItem = ({ item }) => {
    return <SongsCell songsInfo={item} />;
  };
  return (
    <SafeAreaView style={styles.contentView}>
      <FlatList
        style={styles.flatList}
        data={songs.results}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default Songs;

const styles = StyleSheet.create({
  contentView: { flex: 1 },
  flatList: { flex: 1, marginTop: 20 },
});
