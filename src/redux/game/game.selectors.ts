import { createSelector } from 'reselect';
import { RootState } from '../../redux/root.reducer';

const selectGame = (state: RootState) => state.game;

// export const selectProtectedMessage = () => createSelector([selectGeneral], general => general.protected_message);
export const selectSuccess = createSelector(
  [selectGame],
  game => game.success
);