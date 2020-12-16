import React from "react";
import { Provider } from 'react-redux';
import { shallow, mount, ReactWrapper, ShallowWrapper} from 'enzyme';
// import { GuessedWordsActionTypes } from './../redux/guessed-words/guessed-words.types';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input, { UnconnectedInput } from './Input';
import { ThunkAction } from "redux-thunk";
import { RootState } from "../redux/root.reducer";
import { Action } from "redux";

const setup = (initialState?: any) => {
    const store = storeFactory(initialState);
    const wrapper = mount(<Provider store={store}><Input /></Provider>);
    return wrapper;

}

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper: ReactWrapper;
        beforeEach(() => {
            const initialState =  {success: { status: false }};
            wrapper = setup(initialState);
        });
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        test('render input box', () => {
            const inputBox = findByTestAttr(wrapper, "input-box");
            expect(inputBox.length).toBe(1);
        });

        test('renders submit button', () => {
            const submitButton = findByTestAttr(wrapper, "submit-button");
            expect(submitButton.length).toBe(1);
        });
    });

    describe('word has been guessed', () => {
        let wrapper: ReactWrapper;
        beforeEach(() => {
            const initialState = {success: { status: true }};
            wrapper = setup(initialState);
        });
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        test('does not render input box', () => {
            const inputBox = findByTestAttr(wrapper, "input-box");
            expect(inputBox.length).toBe(0);
        });

        test('does not render submit button', () => {
            const submitButton = findByTestAttr(wrapper, "submit-button");
            expect(submitButton.length).toBe(0);
        });
    });

});

describe('redux props', () => {
    test('has success piece of state as prop', () => {
        const success = { status: true };
        const wrapper: ReactWrapper<typeof Input> = setup({ success: success });
        const successProp = wrapper.find('UnconnectedInput').prop('success');
        
        expect(successProp).toBe(success);
    });

    test('evaluateGuessedWord action creation is a function prop', () => {
        const wrapper: ReactWrapper = setup();
        const guessWordProp = wrapper.find('UnconnectedInput').prop('evaluateGuessedWord');
        expect(guessWordProp).toBeInstanceOf(Function);
    });
});

describe('evaluateGuessedWord action creator call', () => {
    let evaluateGuessedWordMock: jest.Mock<ThunkAction<void, RootState, unknown, Action<string>>>;
    let wrapper: ShallowWrapper;
    const guessedWord = 'train';
    beforeEach(() => {
        evaluateGuessedWordMock = jest.fn();
        const props = { 
            evaluateGuessedWord: evaluateGuessedWordMock,
            success: false,
        }
        
        // set up app component with getSecretWordMock as the getSecretWord prop
        wrapper = shallow(<UnconnectedInput {...props}></UnconnectedInput>);

        // add value to input box
        wrapper.setState({ currentGuess: guessedWord})

        // simulate click on submit button
        const submitButton = findByTestAttr(wrapper, "submit-button");
        submitButton.simulate('click', { preventDefault() {} });
    })

    test('evaluateGuessedWord runs on Submit click', () => {
        // check to see if mock ran
        const guessWordCallCount = evaluateGuessedWordMock.mock.calls.length;
        expect(guessWordCallCount).toBe(1);
    });

    test('calls evaluateGuessedWord with input value as argument', () => {
        const guessWordArg = evaluateGuessedWordMock.mock.calls[0][0];
        expect(guessWordArg).toBe(guessedWord);
    });
    test('input box clears on submit', () => {
        expect(wrapper.state('currentGuess')).toBe('');
    });
});
