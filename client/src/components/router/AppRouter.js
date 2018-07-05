import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Logout from '../auth/Logout';
import Gallery from '../pages/Gallery';
import Toolbar from '../toolbar/Toolbar';

const appRouter = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" component={ Home } exact />
        <Route path="/gallery" component={ Gallery } />
        <Route path="/login" component={ Login } />
        <Route path="/signup" component={ Signup } />
        <Route path="/logout" component={ Logout } />
      </Switch>
    </div>
  );
};
export default appRouter;