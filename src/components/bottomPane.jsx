import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../styles/bottomPane.css';
import expandImg from './../img/expand.png';
import marked from 'marked';

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = ( href, title, text ) => `<a target="_blank" href="${ href }" title="${ title }">${ text }</a>`;

const styles = {
  expanded : {
    previewer: {
      "position": "absolute",
      "top": "0",
      "width": '99%',
      "marginLeft": "auto",
      "marginRight": "auto",
    },
    topBar: {
      "width": '100% - 1px',
    }
  },
  notExpanded: {
    previewer: {
      "maxWidth": "800px",
      "marginLeft": "auto",
      "marginRight": "auto",
    },
    topBar: {
      "maxWidth": '800px',
    }
  }
};

class BottomPane extends Component {
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

  render() {
    const convertedText = marked(this.props.text, { renderer:renderer });

    function createMarkup() {
      return {__html: convertedText};
    }

    const currentStyles = this.state.isExpanded ? styles.expanded : styles.notExpanded;

    return (
      <div className="bottomPane">
        <div className="previewer" style={currentStyles.previewer}>
          <div className="topBarPreview" style={currentStyles.topBar}>
            <p className="titlePreview">Previewer</p>
            <input id="expandPreview" type="image" src={expandImg} alt="Expand"
              onClick={this.onClick}/>
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