import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../styles/topPane.css';
import styles from './../styles/dynamicStyles.js';
import { action } from '../actions/action.js';
import expandImg from './../img/expand.png';

class TopPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
  
  render () {
    return (
      <div className="topPane">
        <div className="editor">
          <div className="topBar">
            <p className="title">Editor</p>
            <input type="image" src={expandImg} width="20" height="20" alt="Expand"/>
          </div>
        <textarea 
          id="editor" 
          onChange={ e => this.props.updateText(e.target.value)} 
          value= {this.props.text}
          onClick={this.onClick}
        />
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  const { text } = state;
  return {text};
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateText: (text) => {
      dispatch(action(text));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopPane);
