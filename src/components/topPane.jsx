import React, { Component } from 'react';
import './../styles/topPane.css';
import expandImg from './../img/expand.png';

class TopPane extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.props.translate(event.target.value);
  }

  render() {
    return (
      <div className="topPane">
        <div className="editor">
          <div className="topBar">
            <p className="title">Editor</p>
            <input type="image" src={expandImg} width="20" height="20" alt="Expand"/>
          </div>
        <textarea id="editor" onChange={this.onChange}>{this.props.text}</textarea>
      </div>
    </div>
    )
  }
}

export default TopPane;
