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

const signupUser = () => {
  return {
    type: actionTypes.SIGNUP_USER
  };
};

const signupSuccess = () => {
  return {
    type: actionTypes.SIGNUP_SUCCESS
  };
};

const signupFailure = (error) => {
  return {
    type: actionTypes.SIGNUP_FAILURE,
    error: error
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
        auth.saveToken(token); // save to sessionStorage
        dispatch(loginSuccess(token))
      }
    })
    .catch(err => {
      console.log('Signin error', err);
      dispatch(loginFailure('Unknown error, try again'));
    });
  }
}

export const logout = () => {
  auth.removeToken(); // remove form sessionStorage
  return {
    type: actionTypes.LOGOUT_USER
  }
}

export const reset = () => {
  return {
    type: actionTypes.RESET_STATE
  }
}

// async action which registers user
export const signup = (name, email, password, password_confirmation) => {
  
}