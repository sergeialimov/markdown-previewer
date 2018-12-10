import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../styles/bottomPane.css';
import expandImg from './../img/expand.png';  

class BottomPane extends Component {
  render() {
    return (
      <div className="bottomPane">
        <div className="previewer">
          <div className="topBarPreview">
            <p className="titlePreview">Previewer</p>
            <input type="image" src={expandImg} width="20" height="20" alt="Expand"/>
          </div>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { text } = state;
  return { text };
}

export default connect(mapStateToProps)(BottomPane);