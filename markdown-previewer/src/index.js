import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MarkdownTextbox from './components/markdown_textbox';
import PreviewTextbox from './components/preview_textbox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { input: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Andy Morgan](https://github.com/AndrewRMorgan)*' };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <MarkdownTextbox value={this.state.input} onUpdate={event => this.setState({input: event})}/>
        </div>
        <div className="col-md-6">
          <PreviewTextbox markdown={this.state.input}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
