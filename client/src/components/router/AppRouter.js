import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../auth/Login';
import Signup from '../auth/Signup';

const appRouter = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/login" component={ Login} />
          <Route path="/signup" component={ Signup } />
        </Switch>
      </div>
    </Router>
  );
};
export default appRouter;