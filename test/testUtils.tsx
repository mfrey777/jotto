import { ShallowWrapper } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';

import { rootReducer, RootState } from '../src/redux/root.reducer';
import { middlewares } from '../src/redux/store';

export const storeFactory = (initialState?: RootState) => {

    let store;
    if (initialState) {
        store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));
    } else {
        store = createStore(rootReducer, undefined, applyMiddleware(...middlewares));
    }
    return store;
}

export const findByTestAttr = (wrapper: ShallowWrapper, val: string): ShallowWrapper => {
    return wrapper.find(`[data-test="${val}"]`);
}

