import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { SongsCell } from '../../app/components';

const songsInfo = {
  artistId: 32940,
  artistName: 'Michael Jackson',
  artworkUrl100:
    'https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg',
  collectionName: 'The Essential Michael Jackson',
  collectionPrice: 16.99,
  country: 'USA',
  currency: 'USD',
  kind: 'song',
  primaryGenreName: 'Pop',
  releaseDate: '1972-01-24T12:00:00Z',
  trackCensoredName: "Rockin' Robin",
  trackCount: 21,
  trackExplicitness: 'notExplicit',
  trackId: 159292926,
  trackName: "Rockin' Robin",
  trackNumber: 5,
  trackPrice: -1,
  trackTimeMillis: 153088,
  trackViewUrl: 'https://music.apple.com/us/album/rockin-robin/159292399?i=159292926&uo=4',
  wrapperType: 'track',
};

storiesOf('SongsCell', module).add('SongsCell', () => <SongsCell songsInfo={songsInfo} />);
