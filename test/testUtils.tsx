import { ReactWrapper, ShallowWrapper } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';

import { rootReducer, RootState } from '../src/redux/root.reducer';

// Redux Thunk
import ReduxThunk from 'redux-thunk';

function hasKey<O>(obj: O, key: keyof any): key is keyof O {
    return key in obj
}

export const storeFactory = (partialInitialState?: any) => {
    const middlewares_no_log = [ReduxThunk];

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

    return store;

}

// export const findByTestAttr = (wrapper: ShallowWrapper, val: string): ShallowWrapper => {
//     return wrapper.find(`[data-test="${val}"]`);
// }

export const findByTestAttr = (wrapper: ReactWrapper | ShallowWrapper, val: string): ReactWrapper | ShallowWrapper=> {
    return wrapper.find(`[data-test="${val}"]`);
}
