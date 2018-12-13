import * as actions from './entities/playlists/actions'
import initializePlaylist from './entities/playlists/reducers'
import {
  ON_PAGE_SELECT,
  ON_PLAYLIST_INIT,
  LOAD_PLAYLIST,
  SAVE_SONG_DATA,
  ON_SEARCH_PLAYLIST_INIT,
} from './entities/playlists/actions';



describe('actions', () => {
  it('should create an action on page select', () => {

    const payload = 'sd';
    const type = 'ON_PAGE_SELECT'
    const onPageSelect = (page) => ({
      type: type,
      payload: payload
    });
    expect(actions.onPageSelect(payload,type)).toEqual(onPageSelect())
  })
})

describe('actions', () => {
  it('should intialize a playlist', () => {

    const type = 'ON_PLAYLIST_INIT';
    const playlistId = '0001';
    const genre = 'techno';
    const songCount= 'youtube api';
    const state = 'active';
    const data = 'favorites';
    const thumbnail = 'technoImg.jpg'

    const initializePlaylist = (playlistId, genre, state, data, thumbnail) => ({
      type: type,
      playlistId : playlistId,
      genre: genre,
      state: state,
      data: data,
      thumbnail: thumbnail
    });
    expect(actions.initializePlaylist(playlistId, genre, state, data,thumbnail)).toEqual(initializePlaylist())
  })
})

describe('actions', () => {
  it('should save playlist data', () => {
    const data = 'data'
    const id = '004'
    const genre= 'Rap';

    const payload = {
      songs: data,
      playlistId: id
    }
    const type = 'LOAD_PLAYLIST'
   
    const saveNewPlaylistData = (id, genre, data) => ({
      type: type,
      genre: 'RAP',
      
      payload: payload
    });
    expect(saveNewPlaylistData(id,genre,data)).toEqual(saveNewPlaylistData())
  })
})

describe('actions', () => {
  it('should save song data', () => {
      const id = '005'
      const genre= 'Rap';
      const videoId = '005b';
      const channelTitle = 'Top 50';
     const duration = '3:09';
    const viewCount ='33,800,000'

    const payload = {
      songs: 'Lose Yourself',
      playlistId: 'TOP 100'
    }
    const type = 'SAVE_SONG_DATA'
   
    const saveSongData = (id, genre, videoId, channelTitle, duration, viewCount) => ({
       
       id : id,
       genre: 'Rap',
       videoId : '005b',
       channelTitle : 'Top 50',
       duration : '3:09',
       viewCount : '33,800,000',
      type: SAVE_SONG_DATA,
      playlistId: 'TOP 100',
      genre: 'Rap',
      type: 'SAVE_SONG_DATA',
      id: 4,
      videoId: '005b',
      payload: {
        id:4,
        channelTitle:'ewrfg',
        videoId : '005b',
        duration : '3:09',
        viewCount : '33,800,000',
      }
    })
    expect(saveSongData(id,genre,videoId,channelTitle,duration,viewCount)).toEqual(saveSongData())
  })
})


describe('INITIAL_STATE', () => {
  test('takes in state a returns data', () => {
      const action = { type: 'dummy_action' };
      const expectedState = { selectedAvatar: 0 };

      expect(initializePlaylist(expectedState, action)).toEqual(expectedState);
    });
  });

describe('DEFAULT_STATE', () => {
test('returns default data when undefined', () => {
    const action = { type: 'dummy_action' };
    const expectedState = {
      showPage: 'browse',
      cachedPlaylists: {},
      player: null,
    };

    expect(initializePlaylist(undefined, action)).toEqual(expectedState);
  });
});

