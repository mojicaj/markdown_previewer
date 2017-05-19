var React = require('react');
var marked = require('marked');

class Preview extends React.Component {
	render () {
    var string = marked(this.props.str);
    return (
      <div className='preview'>{string}</div>
    )
	}
}

module.exports = Preview;