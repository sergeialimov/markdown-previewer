import React, { Component } from 'react';
import TopPane from './../components/topPane.jsx';
import BottomPane from './../components/bottomPane.jsx';
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