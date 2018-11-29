import React, { Component } from 'react';
import TopPane from './topPane.jsx';
import BottomPane from './bottomPane.jsx';
import './../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TopPane />
        <BottomPane />
      </div>
    )
  }
}

export default App;