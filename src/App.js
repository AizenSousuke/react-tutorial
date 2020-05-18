import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      {/* Need exact so that it does not render on other pages */}
      {/* Using switch will render the first matched item */}
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  )
}

export default App;