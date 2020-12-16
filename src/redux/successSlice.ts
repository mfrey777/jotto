import { createSlice } from '@reduxjs/toolkit'

interface SuccessState {
  status: boolean
}

const initialState: SuccessState =  {
  status: false,
}

const success = createSlice({
  name: 'success',
  initialState: initialState,
  reducers: {
    correctGuess(state) {
      state.status = true
    },
  }
})

export const {
  correctGuess,
} = success.actions

export default success.reducer