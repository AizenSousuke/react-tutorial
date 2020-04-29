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

  addMeaningOfLife = () => {
    this.setState({ meaningOfLife: this.state.meaningOfLife + 1 }, () => {
      console.log("After callback: " + this.state.meaningOfLife);
    });
    console.log("Before callback: " + this.state.meaningOfLife);
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Meaning of life: { this.state.meaningOfLife }
          </p>
          <button className="btn" onClick={this.addMeaningOfLife}>
                  Add meaning of life <span className="badge badge-primary"></span>
          </button>
        </header>
      </div>
    );
  }
}
