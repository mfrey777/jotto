import { createSelector } from 'reselect';
import { RootState } from '../root.reducer';

const selectState = (state: RootState) => state.success;

// export const selectProtectedMessage = () => createSelector([selectGeneral], general => general.protected_message);
export const selectSuccess = createSelector(
  [selectState],
  success => success
);