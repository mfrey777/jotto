import { ShallowWrapper } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';

import { rootReducer, RootState } from '../src/redux/root.reducer';
import rootSaga from '../src/redux/root.saga';
// import { middlewares_no_log } from '../src/redux/store';
import createSagaMiddleware from 'redux-saga';

export const storeFactory = (initialState?: RootState) => {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares_no_log = [sagaMiddleware];

    let store;
    if (initialState) {
        store = createStore(rootReducer, initialState, applyMiddleware(...middlewares_no_log));
    } else {
        store = createStore(rootReducer, undefined, applyMiddleware(...middlewares_no_log));
    }
    // Run Redux Sagas
    sagaMiddleware.run(rootSaga);
    return store;
}

export const findByTestAttr = (wrapper: ShallowWrapper, val: string): ShallowWrapper => {
    return wrapper.find(`[data-test="${val}"]`);
}

