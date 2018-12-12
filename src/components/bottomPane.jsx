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

    const style = {
      "backgroundColor": 'quotes[this.props.num].color',
      "transition": "background-color 2s",
    };

    return (
      <div className="bottomPane">
        <div className="previewer">
          <div className="topBarPreview">
            <p className="titlePreview">Previewer</p>
            <input id="expandPreview" type="image" src={expandImg} alt="Expand" style={style}
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