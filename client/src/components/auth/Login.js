import React from 'react';
import { NavLink } from 'react-router-dom';
import checkInputValidity from '../../utilities/CheckValidity';
import { signin } from '../../utilities/api-helpers';
import { isAuthenticated, saveToken, removeToken } from '../../utilities/auth-helpers';

class Login extends React.Component {
  state = {
    email: {
      value: '',
      validation: {
        required: true,
        isEmail: true
      },
      valid: false
    },
    password: {
      value: '',
      validation: {
        required: true,
        minLength: 8,
        maxLength: 72
      },
      valid: false
    },
    formIsValid: false,
    error: ''
  }
  
  onChangeHandler = (e, name) => {
    const value = e.target.value;
    const clone = {
      ...this.state
    }
    clone[name].valid = checkInputValidity(value, clone[name].validation);
    clone[name].value = value;

    let isValid = true;
    for(let prop in clone){
      if(prop === 'email' || prop === 'password'){
        isValid = clone[prop].valid && isValid;
      }
    }
    clone.formIsValid = isValid;
    
    this.setState({ ...clone })
  }
  
  onSubmitHandler = (e) => {
    e.preventDefault();
    removeToken(); // remove any previously saved token
    signin({
      "auth": { "email": this.state.email.value, "password": this.state.password.value }
    })
    .then(response => {
      if(response.ok && response.status === 201){
        return response.json();
      } else {
        this.setState({ error: 'User not found or password is invalid' });
      }
    })
    .then(jwt => {
      if(jwt) saveToken(jwt);
      console.log('isAuthenticated', !!isAuthenticated());
    })
    .catch(err => console.log('Signin error', err));
  }

  dismissErrorHandler = () => {
    const nameUpdate = {
      ...this.state.name,
      value: ''
    }
    const emailUpdate = {
      ...this.state.email,
      value: ''
    }
    const passwordUpdate = {
      ...this.state.password,
      value: ''
    }
    const passwordConfirmationUpdate = {
      ...this.state.password_confirmation,
      value: ''
    }
    // clear input fields and reset error value
    this.setState({
      name: nameUpdate,
      email: emailUpdate,
      password: passwordUpdate,
      password_confirmation: passwordConfirmationUpdate,
      error: ''
    });
  }

  render(){
    let errorMessage = null;
    if(this.state.error) {
      errorMessage = (
        <div className="alert alert-danger" role="alert">
          <button onClick={ this.dismissErrorHandler } type="button" className="close" data-dismiss="alert">
            <span aria-hidden="true">&times;</span>
          </button>
          <strong>{ this.state.error }</strong>
        </div>
      );
    }

    return (
      <div className="App Form">
        { errorMessage }

        <h1 className="center">Login page</h1>

        <form onSubmit={ this.onSubmitHandler }>
          <div className="Input">
            <label className="Label">Email address</label>
            <input
              name="email"
              type="text"
              onChange={ (e) => this.onChangeHandler(e, "email") }
              placeholder="Your email address"
              value={ this.state.email.value }
            />
          </div>
          <div className="Input">
            <label className="Label">Your password</label>
            <input
              name="password"
              type="password"
              onChange={ (e) => this.onChangeHandler(e, "password") }
              placeholder="Password (minimum 8 characters)"
              value={ this.state.password.value }
            />
          </div>
          <div className="Input">
            <input
              type="submit"
              disabled={ !this.state.formIsValid }
              value="Login"
            />
          </div>
        </form> 

        <p className="center">Not registered?&nbsp;
          <strong>
            <NavLink to="/signup">Signup</NavLink>
          </strong>
        </p>
      </div>
    );
  }
}
export default Login;