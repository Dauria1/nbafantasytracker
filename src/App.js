import React, { Component } from 'react';
import Board from './components/Board.jsx'
import Teams from './components/Teams.jsx'
import Players from './components/Players.jsx'
import logo from './basketball.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="banner">NBA Fantasy Tracker</h1>
          <img src={logo} className="App-logo" alt="logo" />
        <Board />
      </div>
    );
  }
}

export default App;
