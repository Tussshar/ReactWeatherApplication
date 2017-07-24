var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Tushar',
  location: 'Boston'
};

var objTwo = {
  age: 25,
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>BoilerPlate App!!</h1>,
  document.getElementById('app')
);
