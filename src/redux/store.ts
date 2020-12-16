// General Redux
import { createStore, applyMiddleware, Action } from 'redux';
// import { Action, createStore, applyMiddleware  } from '@reduxjs/toolkit';

// Redux Thunk
import ReduxThunk, { ThunkAction } from 'redux-thunk';

// Redux Logger
import logger from 'redux-logger';

import { rootReducer, RootState } from './root.reducer';


// Redux Dev Tools
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({});

// Redux Saga declaration
export const middlewares = [ReduxThunk, logger];
export const middlewares_no_log = [ReduxThunk];


// Create Store
// export type DispatchFunctionType = ThunkDispatch<RootState, undefined, typeof evaluateGuessedWord>
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middlewares)));

// export type AppDispatch = typeof store.dispatch

// export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store;