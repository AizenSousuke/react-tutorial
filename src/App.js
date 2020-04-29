import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      meaningOfLife: 42
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Meaning of life: { this.state.meaningOfLife }
          </p>
        </header>
      </div>
    );
  }
}
