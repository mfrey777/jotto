import { ShallowWrapper } from 'enzyme';
import { createStore } from 'redux';

import { rootReducer, RootState } from '../src/redux/root.reducer';

export const storeFactory = (initialState?: RootState) => {
    let store;
    if(initialState) {
        store = createStore(rootReducer, initialState);
    } else {
        store = createStore(rootReducer, initialState);
    }
    return store;
}

export const findByTestAttr = (wrapper:ShallowWrapper, val: string):ShallowWrapper => {
    return wrapper.find(`[data-test="${val}"]`);
}

