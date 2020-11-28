import {
  SecretWordActionTypes,
  SecretWordAction,
} from './secret-word.types';

function secretWordReducer(state = '', action: SecretWordAction): string {
  switch (action.type) {
    case SecretWordActionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
}

export default secretWordReducer;
