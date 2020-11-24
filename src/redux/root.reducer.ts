import { combineReducers } from 'redux';
import successReducer from './success/success.reducer';

export const rootReducer = combineReducers({
  success: successReducer,
});

export type RootState = ReturnType<typeof rootReducer>;