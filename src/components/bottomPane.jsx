import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../styles/bottomPane.css';
import expandImg from './../img/expand.png';
import marked from 'marked';

class BottomPane extends Component {
  render() {
    const convertedText = marked(this.props.text);

    function createMarkup() {
      return {__html: convertedText};
    }

    return (
      <div className="bottomPane">
        <div className="previewer">
          <div className="topBarPreview">
            <p className="titlePreview">Previewer</p>
            <input type="image" src={expandImg} width="20" height="20" alt="Expand"/>
          </div>
          <div id="preview" dangerouslySetInnerHTML= {createMarkup()}></div>
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