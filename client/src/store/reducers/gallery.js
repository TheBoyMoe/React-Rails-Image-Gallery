import * as actionTypes from '../actions/actionTypes';

const initialState = {
  id: null,
  title: null,
  images: null,
  uploaded: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type){
    case actionTypes.DOWNLOAD_GALLERY:
      return {
        ...state,
        error: null
      };
    case actionTypes.UPLOAD_SUCCESS:
      return {
        ...state,
        id: action.id,
        uploaded: true,
        error: null
      };
    case actionTypes.DOWNLOAD_GALLERY_SUCCESS:
      return {
        ...state,
        id: action.id,
        title: action.title,
        images: action.images,
        uploaded: false,
        error: null
      }
    case actionTypes.UPLOAD_FAILURE:
    case actionTypes.DOWNLOAD_GALLERY_FAILURE:
      return {
        ...state,
        id: null,
        title: null,
        images: null,
        uploaded: false,
        error: action.error
      }  
    case actionTypes.UPLOAD_FILES:
    case actionTypes.RESET_STATE:
      return {
        ...state,
        id: null,
        title: null,
        images: null,
        uploaded: false,
        error: null
      }
    default:
      return state;
  }
}