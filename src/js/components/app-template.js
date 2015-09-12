var React = require('react');
var Header = require('./header/app-header.js');

var Template = React.createClass({
  render:function(){
  //anything that's passed into the componenet will render (catalog, cart or catalog detail)
    return (
      <div className="container">
        <Header />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Template;
