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

export function getSecretWord(
): SecretWordAction {
  return {
    type: SecretWordActionTypes.GET_SECRET_WORD,
  };
}