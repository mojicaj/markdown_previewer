var React = require('react');
var marked = require('marked');

class Preview extends React.Component {

  constructor() {
    super();

    this.rawMarkup = this.rawMarkup.bind(this);
  }

  rawMarkup () {
    var string = marked(this.props.str, {sanitize: true});

    return {__html: string};
  }

  render () {

    return (
      <div className='preview' dangerouslySetInnerHTML = {this.rawMarkup()}></div>
    );
  }
}

module.exports = Preview;
