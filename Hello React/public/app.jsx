var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');
var firstName = 'Tushar';

ReactDOM.render(
  <Greeter name={firstName} message="Message from prop"/>,
  document.getElementById('app')
);
