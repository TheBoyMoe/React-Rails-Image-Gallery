import React from 'react';
import { NavLink } from 'react-router-dom';

const signup = (props) => {
  return (
    <div className="App">
      <h1>Signup page</h1>
      <p>Already registered? 
        <strong>
          <NavLink to="/login">Login</NavLink>
        </strong>
      </p>
    </div>
  );
};
export default signup;