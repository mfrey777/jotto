import { combineReducers } from 'redux';
import successReducer from './success/success.reducer';
import guessedWordsReducer from './guessed-words/guessed-words.reducer';

export const rootReducer = combineReducers({
  success: successReducer,
  guessedWords: guessedWordsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;