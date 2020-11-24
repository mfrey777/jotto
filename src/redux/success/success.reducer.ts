import { SuccessActionTypes, SuccessAction } from './success.types'

function successReducer (state = false, action: SuccessAction): boolean  {
  switch(action.type) {
    case SuccessActionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
}
  
export default successReducer;