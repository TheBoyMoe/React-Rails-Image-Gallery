import * as actionTypes from './actionTypes';
import * as api from '../../utilities/api-helpers';

const uploadFiles = () => {
  return {
    type: actionTypes.UPLOAD_FILES
  }
};

const uploadSuccess = (id) => {
  return {
    type: actionTypes.UPLOAD_SUCCESS,
    id: id
  }
};

const uploadFailure = (error) => {
  return {
    type: actionTypes.UPLOAD_FAILURE,
    error: error
  }
};

export const uploader = (formData) => {
  dispatch(uploadFiles());
  return (dispatch) => {
    api.fileUploader(formData)
      .then(res => {
        if(res && res.status === 201) {
          const id = res.data.id;
          dispatch(uploadSuccess(id));
        } else {
          console.log('Error uploading files');
          dispatch(uploadFailure('Error uploading files'));
        }
      })
      .catch(err => {
        console.log('FileUploaderError', err);
        dispatch(uploadFailure(err));
      });
  }
}
