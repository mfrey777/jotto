
import { Store } from 'redux';
import moxios from 'moxios';

import { RootState } from './root.reducer';
import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from './secretWordSlice';

import { api } from '../utils/api';

describe('getSecretWord action creator', () => {
  let store: Store<RootState>;
  beforeEach(() => {
    store = storeFactory();
    moxios.install(api);
  });
  afterEach(() => {
      moxios.uninstall(api);
    });
  
  test("add response word to state", async () => {
    const secretWord = 'party';
    
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {word: secretWord},
      });
    });
  

    store.dispatch(getSecretWord());

    await new Promise(res => setTimeout(res, 100));
    const newState = store.getState();
    // console.log("state: " + newState.secretWord);
    expect(newState.secretWord.word).toBe(secretWord);
  });
});