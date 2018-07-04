import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Toolbar from './components/toolbar/Toolbar';
import AppRouter from './components/router/AppRouter';
import './styles/styles.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Toolbar />
          <AppRouter />
        </div>
      </Router>
    );
  }
}

export default App;
