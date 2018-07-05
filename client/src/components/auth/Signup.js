import React from 'react';
import { NavLink } from 'react-router-dom';
import checkInputValidity from '../../utilities/CheckValidity';
import { register, signin } from '../../utilities/api-helpers';
import { isAuthenticated, saveToken } from '../../utilities/auth-helpers';

class Signup extends React.Component {
  state = {
    name: {
      value: '',
      validation: {
        required: true,
        minLength: 3
      },
      valid: false
    },
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
    password_confirmation: {
      value: '',
      validation: {
        required: true,
        minLength: 8,
        maxLength: 72,
        match: true
      },
      valid: false
    },
    formIsValid: false,
    error: ''
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const user = {
      "name": this.state.name.value,
      "email": this.state.email.value,
      "password": this.state.password.value,
      "password_confirmation": this.state.password_confirmation.value
    }
    // register user and signin if successful
    register({"user": user})
      .then(res => {
        if(res && res.ok){
          if(res.status === 200){
            this.setState({ error: ''});
            signin({
              "auth": { "email": this.state.email.value, "password": this.state.password.value }
            })
            .then(response => {
              if(response.ok && response.status === 201){
                return response.json();
              } else {
                console.log(response)
                this.setState({ error: response.statusText} );
              }
            })
            .then(jwt => {
              if(jwt) saveToken(jwt);
              console.log('isAuthenticated', !!isAuthenticated());
            });
          } else {
            this.setState({ error: 'User already registered' });
            console.log('User already registered');
          }
        } else {
          this.setState({ error: res.statusText })
        }  
      })
      .catch(err => console.log(err));
  };

  onChangeHandler = (e, name) => {
    // update state
    const value = e.target.value;
    const clone = { ...this.state };
    clone[name].valid = checkInputValidity(value, clone[name].validation);
    clone[name].value = value;

    let isValid = true;
    for(let prop in clone){
      if(prop === 'name' || prop === 'email' || prop === 'password' || prop === 'password_confirmation'){
        isValid = clone[prop].valid && isValid;
      }
    }
    if(clone.password.value !== clone.password_confirmation.value)
      clone.password_confirmation.valid = false;

    isValid = clone.password.value === clone.password_confirmation.value && isValid;
    clone.formIsValid = isValid;
    this.setState({ ...clone })
  };

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

        <h1 className="center">Signup page</h1>

        <form onSubmit={ this.onSubmitHandler }>
          <div className="Input">
            <label className="Label">Name</label>
            <input
              name="name"
              type="text"
              onChange={ (e) => this.onChangeHandler(e, "name") }
              placeholder="Your full name"
              value={ this.state.name.value }
            />
          </div>
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
            <label className="Label">Confirm password</label>
            <input
              name="password_confirmation"
              type="password"
              onChange={ (e) => this.onChangeHandler(e, "password_confirmation") }
              placeholder="Confirm password"
              value={ this.state.password_confirmation.value }
            />
          </div>

          <div className="Input">
            <input
              type="submit"
              disabled={ !this.state.formIsValid }
              value="Signup"
            />
          </div>
        </form>  
  
        <p className="center">Already registered?&nbsp;
          <strong>
            <NavLink to="/login">Login</NavLink>
          </strong>
        </p>
      </div>
    );
  }
}
export default Signup;