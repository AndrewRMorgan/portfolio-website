import React, { Component } from 'react';

class MarkdownTextbox extends Component {
  render() {
    return (
        <textarea
        rows="22"
        className="markdown-textbox form-control"
        value={this.props.value}
        onChange={event => this.props.onUpdate(event.target.value)} />
    );
  }
}

export default MarkdownTextbox;
