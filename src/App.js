import React, { Component } from 'react';
import './App.css';
import Welcome from './mycomponent/Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome/>
      </div>
    );
  }
}

export default App;
