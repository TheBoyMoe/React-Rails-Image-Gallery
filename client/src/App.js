import React, { Component } from 'react';
import Toolbar from './components/toolbar/Toolbar';
import './styles/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <div className="App-intro">
          <h1 className="App-title">Welcome to React</h1>
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
      </div>
    );
  }
}

export default App;
