import moxios from 'moxios';
import { storeFactory } from '../../../test/testUtils';
import { getSecretWord } from './secret-word.actions';

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('adds response word to state', () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      console.log('moxios wait executed');
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    // store.dispatch(setSecretWord(secretWord)).then(() => {
    //   const newState = store.getState();
    //   expect(newState.secretWord).toBe(secretWord);
    // });
    store.dispatch(getSecretWord());
    const newState = store.getState();
    console.log('new state: ' + newState.secretWord);
    expect(newState.secretWord).toBe(secretWord);


  });
});