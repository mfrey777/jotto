export enum SecretWordActionTypes {
  SET_SECRET_WORD = 'SET_SECRET_WORD',
  GET_SECRET_WORD = 'GET_SECRET_WORD',
}

export interface setSecretWordAction {
  type: SecretWordActionTypes.SET_SECRET_WORD;
  payload: string;
}

export interface getSecretWordAction {
  type: SecretWordActionTypes.GET_SECRET_WORD;
}

export type SecretWordAction =
  | setSecretWordAction
  | getSecretWordAction;

  