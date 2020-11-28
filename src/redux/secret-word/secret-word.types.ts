export enum SecretWordActionTypes {
  SET_SECRET_WORD = 'SET_SECRET_WORD',
}

export interface setSecretWordAction {
  type: SecretWordActionTypes.SET_SECRET_WORD;
  payload: string;
}

export type SecretWordAction =
  | setSecretWordAction;

  