import * as actionTypes from './actionTypes';
import * as auth from '../../utilities/auth-helpers';
import * as api from '../../utilities/api-helpers';

const loginUser = () => {
  return {
    type: actionTypes.LOGIN_USER
  };
};

const loginSuccess = (token) => {
  // saveToken(token); // save token to sessionStorage
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token: token
  };
};

const loginFailure = (err) => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    error: err
  };
};

// async action which logs the user in
export const login = (email, password) => {
  const user = {
    'email': email,
    'password': password
  };

  return (dispatch) => {
    dispatch(loginUser());
    api.signin({'auth': user})
    .then(response => {
      if(response.ok && response.status === 201){
        return response.json();
      } else {
        dispatch(loginFailure('User was not found or password is invalid'));
      }
    })
    .then(token => {
      if(token) {
        // login user and redirect 
        auth.saveToken(token);
        dispatch(loginSuccess(token))
      }
      console.log('isAuthenticated', !!auth.isAuthenticated());
    })
    .catch(err => {
      console.log('Signin error', err);
      dispatch(loginFailure('Unknown error, try again'));
    });
  }
}

export const reset = () => {
  return {
    type: actionTypes.RESET_STATE
  }
}