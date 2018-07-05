import React from 'react';
import { Redirect } from 'react-router-dom';
import { removeToken } from '../../utilities/auth-helpers';

class Logout extends React.Component {
  componentDidMount(){
    removeToken();
  }

  render(){
    return (
      <Redirect to="/" />
    );
  }
}
export default Logout;