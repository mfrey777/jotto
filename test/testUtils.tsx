import { ShallowWrapper } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';

import { rootReducer, RootState } from '../src/redux/root.reducer';
import rootSaga from '../src/redux/root.saga';
import createSagaMiddleware from 'redux-saga';

function hasKey<O>(obj: O, key: keyof any): key is keyof O {
    return key in obj
}

export const storeFactory = (partialInitialState: any) => {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares_no_log = [sagaMiddleware];

    let store;
    store = createStore(rootReducer, undefined, applyMiddleware(...middlewares_no_log));
    if (partialInitialState) {
        const currentState: RootState = store.getState();
        for (let key in partialInitialState) {
            let value = partialInitialState[key];
            if(hasKey(currentState, key)) {
                currentState[key] = value;
            }
        }
        store = createStore(rootReducer, currentState, applyMiddleware(...middlewares_no_log));
    }

    // Run Redux Sagas
    sagaMiddleware.run(rootSaga);
    return store;
}

export const findByTestAttr = (wrapper: ShallowWrapper, val: string): ShallowWrapper => {
    return wrapper.find(`[data-test="${val}"]`);
}

