import { createSelector } from 'reselect';
import { RootState } from '../root.reducer';

const selectState = (state: RootState) => state.secretWord;

// export const selectProtectedMessage = () => createSelector([selectGeneral], general => general.protected_message);
export const selectSecretWord = createSelector(
  [selectState],
  secretWord => secretWord
);