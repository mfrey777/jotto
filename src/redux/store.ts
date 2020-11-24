// General Redux
import { createStore, applyMiddleware, compose } from 'redux';

// Redux Logger
import logger from 'redux-logger';

import { rootReducer } from './root.reducer';

// Enable Redux Dev Tools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(logger)));

export default store;