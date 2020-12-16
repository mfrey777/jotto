import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppThunk } from './store';
import { correctGuess } from './successSlice';
import { getLetterMatchCount } from '../helpers';

export interface GuessedWord {
  guessedWord: string;
  letterMatchCount: number;
}

interface GuessedWordsState {
  words: GuessedWord[]
}

const initialState: GuessedWordsState = {
  words: [],
}


const guessedWords = createSlice({
  name: 'guessedWords',
  initialState,
  reducers: {
    guessWord(state, action: PayloadAction<GuessedWord>) {
      state.words = [...state.words, action.payload];
    },
  }
})

export const {
  guessWord,
} = guessedWords.actions

export default guessedWords.reducer

export const evaluateGuessedWord = (guessedWord: string):AppThunk => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord.word;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    dispatch(guessWord({guessedWord, letterMatchCount}));
    
    if(guessedWord === secretWord) {
      dispatch(correctGuess());
    } 
  };
};