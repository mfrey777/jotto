import { GameActionTypes, GameAction, GameState, GuessedWord } from './game.types'

const INITIAL_STATE = {
  success: false,
  secretWord: '',
  guessedWord: new Array<GuessedWord>(),
  };
  
function gameReducer (state = INITIAL_STATE, action: GameAction): GameState  {
  switch(action.type) {
    case GameActionTypes.CORRECT_GUESS:
      return {
        ...state,
        success: true,
      }
    default:
      return state;
  }
}
  
export default gameReducer;