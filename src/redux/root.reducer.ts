import { combineReducers } from 'redux';
import successReducer from './successSlice';
import guessedWordsReducer from './GuessedWordsSlice';
import secretWordsReducer from './secretWordSlice';

export const rootReducer = combineReducers( {
  success: successReducer,
  guessedWords: guessedWordsReducer,
  secretWord: secretWordsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;