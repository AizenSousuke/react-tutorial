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
    // To use the prevState so as to guarantee the value is the latest one
    this.setState((prevState, prevProps) => {
      return { meaningOfLife: prevState.meaningOfLife + prevProps.increment }
    },
      () => console.log(this.state.meaningOfLife)
    )
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
