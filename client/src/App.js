import React, { Component } from 'react';

import Toolbar from './components/toolbar/Toolbar';
import AppRouter from './components/router/AppRouter';
import './styles/styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <AppRouter />
      </div>
    );
  }
}

export default App;
