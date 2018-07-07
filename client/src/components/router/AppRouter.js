import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../pages/Home';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Logout from '../auth/Logout';
import Gallery from '../pages/Gallery';
import NotFound from '../pages/NotFound';
import { isAuthenticated } from '../../utilities/auth-helpers';
import { checkAuthState } from '../../store/actions/index';

class AppRouter extends React.Component {
  componentDidMount(){
    this.props.checkAuth();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/" component={ Home } exact />
        <Route path="/gallery" component={ Gallery } />
        <Route path="/login" component={ Login } />
        <Route path="/signup" component={ Signup } />
        <Route component={ NotFound } />
      </Switch>
    );
    if(isAuthenticated()){
      routes = (
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/gallery" component={ Gallery } />
          <Route path="/logout" component={ Logout } />
          <Route component={ NotFound } />
        </Switch>
      );
    }
  
    return (
      <div className="container">
        { routes }  
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: () => dispatch(checkAuthState())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(AppRouter));