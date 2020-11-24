import { GameActionTypes, GameAction } from './game.types'

const INITIAL_STATE = {
  success: false,
  };
  
function gameReducer (state = INITIAL_STATE, action: GameAction) {
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