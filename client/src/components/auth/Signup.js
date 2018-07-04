import React from 'react';
import { NavLink } from 'react-router-dom';

class Signup extends React.Component {
  state = {
    name: {
      value: '',
      validation: {
        required: true,
        minLength: 3
      },
      valid: false,
      touched: false
    },
    email: {
      value: '',
      validation: {
        required: true,
        isEmail: true
      },
      valid: false,
      touched: false
    },
    password: {
      value: '',
      validation: {
        required: true,
        minLength: 8,
        maxLength: 72
      },
      valid: false,
      touched: false
    },
    password_confirmation: {
      value: '',
      validation: {
        required: true,
        minLength: 8,
        maxLength: 72,
        match: true
      },
      valid: false,
      touched: false
    },
    formIsValid: false
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    // TODO - pass data to api
  };

  onChangeHandler = (e, name) => {

  };

  render(){
    return (
      <div className="App Form">
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
              value="Submit"
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