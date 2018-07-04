import React from 'react';
import { NavLink } from 'react-router-dom';

const login = (props) => {
  return (
    <div className="App">
      <h1>Login page</h1>
      <p>Not registered? 
        <strong>
          <NavLink to="/signup">Signup</NavLink>
        </strong>
      </p>
    </div>
  );
};
export default login;