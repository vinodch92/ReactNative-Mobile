import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import config from '../config';

const SongsCell = ({ songsInfo }) => {
  const millisToMinutesAndSeconds = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={styles.contentView}>
      <View style={styles.mainView}>
        <Image
          style={styles.image}
          source={{ uri: songsInfo.artworkUrl100 }}
          resizeMode="contain"
        />
        <View style={styles.infoBGView}>
          <Text style={styles.title} numberOfLines={2}>
            {`${songsInfo.collectionName}, ${songsInfo.trackName}`}
          </Text>
          <View style={styles.nameBGView}>
            <Text style={styles.body} numberOfLines={1}>
              {songsInfo.artistName}
            </Text>
            <Text style={styles.body} numberOfLines={1}>
              {`${millisToMinutesAndSeconds(songsInfo.trackTimeMillis)} m`}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export default SongsCell;

const styles = StyleSheet.create({
  contentView: {
    width: '100%',
    paddingHorizontal: 10,
  },
  mainView: { flexDirection: 'row', marginRight: 10 },
  title: {
    marginTop: 10,
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
  },
  infoBGView: { flex: 1 },
  body: {
    marginTop: 5,
    fontSize: 15,
    marginLeft: 20,
    marginRight: 20,
    maxWidth: 200,
    color: config.colors.gray,
  },
  nameBGView: { flexDirection: 'row' },
  divider: {
    marginTop: 10,
    height: 1,
    backgroundColor: config.colors.cellDivider,
  },
  image: { width: 60, height: 60, borderRadius: 30, alignSelf: 'center' },
});
