import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';

import { storeFactory } from '../test/testUtils';
import App, { UnconnectedApp} from './App';

const setup = async (initialState?: any) =>  {
    const store = storeFactory(initialState);
  
    const wrapper = mount(<Provider store={store}><App /></Provider>);
    // await wrapper.update();
    // console.log('<App> mounted for testing');
    return wrapper;

}

describe('redux properties', () => {
  test('has access to `success` state', async () => {
    const successState = { status: true};
    const wrapper = await setup({ success: successState });
    const successProp = wrapper.find('UnconnectedApp').prop('success');
    expect(successProp).toEqual(successState);
  });

  test('has access to `secretWord` state', async () => {
    // const secretWord = 'party';
    // const secretWordState = { loading: false, error: null, word: secretWord}
    // const wrapper = await setup({secretWord: secretWordState});
    // can only test default state because the componentDidMount triggers a getSecret Word Thunk
    const secretWordState = { loading: true, error: null, word: null}
    const wrapper = await setup();
    const secretWordProp = wrapper.find('UnconnectedApp').prop('secretWord');
    expect(secretWordProp).toEqual(secretWordState);
  });

  test('has access to `guessedWords` state', async () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3}];
    const wrapper = await setup({ guessedWords });
    const guessedWordsProp =  wrapper.find('UnconnectedApp').prop('guessedWords');
    expect(guessedWordsProp).toBe(guessedWords);
  });

  test('getSecretWord acion creator is a function on the props', async () => {
    const wrapper = await setup();
    const getSecretWordProp = wrapper.find('UnconnectedApp').prop('getSecretWord');
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

describe('lifecycle events', () => {
  test('getSecretWord runs on App mount', () => {
    const getSecretWordMock = jest.fn();
    const props = { 
      getSecretWord: getSecretWordMock,
      success: false,
      guessedWords: [],
      secretWord: ''
    }
    
    // set up app component with getSecretWordMock as the getSecretWord prop
    const wrapper = shallow(<UnconnectedApp {...props}></UnconnectedApp>);

    // run the lifecycle method
    if(wrapper.instance()){
      // console.log('App componentDidMount() executed for testing');
      wrapper.instance().componentDidMount();
    }
    
    // check to see if mock ran
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordCallCount).toBe(1);
  });
});