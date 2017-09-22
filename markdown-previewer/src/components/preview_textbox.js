import React, { Component } from 'react';
import Marked from 'marked';

class PreviewTextbox extends Component {

  createMarkup() {
    return { __html: Marked(this.props.markdown)}
  }

  render() {
    return (
      <div className="preview-div" dangerouslySetInnerHTML={this.createMarkup()}></div>
    );
  }
};

export default PreviewTextbox;
