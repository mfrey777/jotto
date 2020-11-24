import React from "react";
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input from './Input';
// import store from '../redux/store';



const setup = () => {
    const store = storeFactory();
    // console.log('store: ');
    // console.log(store.getState());
    const wrapper = shallow(<Input store={store}/>).dive().dive();
    return wrapper;
    
}

setup();


describe('render', () => {
    describe('word has not been guessed', () => {
        test('renders component without error', () => {

        });

        test('render input box', () => {

        });

        test('renders submit button', () => {

        });
    });

    describe('word has been guessed', () => {
        test('renders component without error', () => {

        });

        test('does not render input box', () => {

        });

        test('does not render submit button', () => {

        });
    });

});

describe('update state', () => {

});

