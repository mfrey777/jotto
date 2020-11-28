// General Redux
import { createStore, applyMiddleware } from 'redux';

// Redux Saga
import createSagaMiddleware from 'redux-saga';

// Redux Logger
import logger from 'redux-logger';


import { rootReducer } from './root.reducer';
import rootSaga from './root.saga';

// Redux Dev Tools
import { composeWithDevTools } from 'redux-devtools-extension';
const composeEnhancers = composeWithDevTools({});

// Redux Saga declaration
const sagaMiddleware = createSagaMiddleware();
export const middlewares = [sagaMiddleware, logger];
export const middlewares_no_log = [sagaMiddleware];


// Create Store
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middlewares)));

// Run Redux Sagas
sagaMiddleware.run(rootSaga);

export default store;