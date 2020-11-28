import {
  SecretWordActionTypes,
  SecretWordAction,
} from './secret-word.types';

export function setSecretWord(
  newSecretWord: string
): SecretWordAction {
  return {
    type: SecretWordActionTypes.SET_SECRET_WORD,
    payload: newSecretWord,
  };
}