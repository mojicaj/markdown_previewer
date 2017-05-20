var React = require('react');
var Preview = require('./Preview');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      txtValue: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(txt) {

    this.setState({
      txtValue: txt.target.value
    });
  }

  render() {

    return (
      <div className='container'>
        <div className='txt-div'>
          <textarea className='txt' rows='35' onChange={this.handleChange} value={this.state.txtValue}
          ref='inputValue'></textarea>
        </div>

        <Preview str={this.state.txtValue} />

      </div>
    );
  }
}

module.exports = App;
