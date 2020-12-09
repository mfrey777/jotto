import React from "react";
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input, { UnconnectedInput } from './Input';
// import { RootState } from '../redux/root.reducer';

const setup = (initialState?: any) => {
    const store = storeFactory(initialState);
    // console.log('store: ');
    // console.log(store.getState());
    const wrapper = shallow(<Input store={store} />).dive().dive();
    return wrapper;

}

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper: ShallowWrapper;
        beforeEach(() => {
            const initialState = { success: false };
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
        let wrapper: ShallowWrapper;
        beforeEach(() => {
            const initialState = { success: true };
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
    test('has success piec of state as prop', () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.instance().props.success;
        console.log(successProp);
        expect(successProp).toBe(success);
    });

    test('guessWord acion creation is a function prop', () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    });
});

describe('guessWord action creator call', () => {
    let guessWordMock;
    let wrapper: ShallowWrapper;
    const guessedWord = 'train';
    beforeEach(() => {
        guessWordMock = jest.fn();
        const props = { 
            guessWord: guessWordMock,
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

    test('guessWord runs on Submit click', () => {
        // check to see if mock ran
        const guessWordCallCount = guessWordMock.mock.calls.length;
        expect(guessWordCallCount).toBe(1);
    });

    test('calls guessWord with input value as argument', () => {
        const guessWordArg = guessWordMock.mock.calls[0][0];
        expect(guessWordArg).toBe(guessedWord);
    });


});
