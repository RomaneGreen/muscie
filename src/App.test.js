import * as actions from './entities/playlists/actions'
import ON_PAGE_SELECT from './entities/playlists/actions'
import ON_PLAYLIST_INIT from './entities/playlists/actions'

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