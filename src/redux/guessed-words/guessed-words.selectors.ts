import { createSelector } from 'reselect';
import { RootState } from '../root.reducer';

const selectState = (state: RootState) => state.guessedWords;

// export const selectProtectedMessage = () => createSelector([selectGeneral], general => general.protected_message);
export const selectGuessedWords = createSelector(
  [selectState],
  guessedWords => guessedWords
);