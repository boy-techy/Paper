import React, { Component } from 'react';
import './App.css';
import './component/css/reset.css';
import NavBar from './component/NavBar';
import Carousel from './component/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Carousel />
      </div>
    );
  }
}

export default App;
