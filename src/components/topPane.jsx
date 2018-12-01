import React, { Component } from 'react';
import './../styles/topPane.css';
import expandImg from './../img/expand.png';

class TopPane extends Component {
  render() {
    return (
      <div class="topPane">
        <div class="editor">
        <div class="topBar">
          <p class="title">Editor</p>
          <input type="image" src={expandImg} width="20" height="20" alt="Expand"></input>
        </div>
      </div>
    </div>
    )
  }
}

export default TopPane;