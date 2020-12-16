import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppThunk } from './store';
import { api } from '../utils/api';

export interface SecretWordState {
  loading: boolean;
  word: string | null;
  error: string | null;
}

const initialState: SecretWordState = {
  loading: true,
  word: null,
  error: null,
}

const secretWord = createSlice({
  name: 'secretWord',
  initialState,
  reducers: {
    secretWordStart(state) {
      state.loading = true;
      state.error = null;
      state.word = null;
    },
    secretWordSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.word = action.payload
    },
    secretWordFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {
  secretWordStart,
  secretWordSuccess,
  secretWordFailure
} = secretWord.actions

export default secretWord.reducer

export const getSecretWord = ():AppThunk => {
return dispatch => {
  dispatch(secretWordStart());
  return api
    .get('/api/word')
    .then(res => {
      dispatch(secretWordSuccess(res.data.word));
     })
    .catch(err => {
      if(err instanceof Error) {
        dispatch(secretWordFailure(err.message));
      }
    });
  };
};