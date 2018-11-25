import React, { Component } from 'react';
import Editor from './editor.jsx';
import Previewer from './previewer.jsx';
import './../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Editor />
        <Previewer />
      </div>
    )
  }
}

export default App;