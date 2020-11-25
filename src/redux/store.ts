// General Redux
import { createStore, applyMiddleware, compose } from 'redux';

// Redux Saga
import createSagaMiddleware from 'redux-saga';

// Redux Logger
import logger from 'redux-logger';


import { rootReducer } from './root.reducer';
import rootSaga from './root.saga';

// Enable Redux Dev Tools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Redux Saga declaration
const sagaMiddleware = createSagaMiddleware();
export const middlewares = [sagaMiddleware, logger];


// Create Store
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middlewares)));

// Run Redux Sagas
sagaMiddleware.run(rootSaga);

export default store;