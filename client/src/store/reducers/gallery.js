import * as actionTypes from '../actions/actionTypes';

const initialState = {
  id: null,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type){
    case actionTypes.UPLOAD_FILES:
      return {
        ...state,
        error: null
      };
    case actionTypes.UPLOAD_SUCCESS:
      return {
        ...state,
        id: action.id,
        error: null
      };
    case actionTypes.UPLOAD_FAILURE:
      return {
        ...state,
        id: null,
        error: action.error
      }; 
    default:
      return state;
  }
}