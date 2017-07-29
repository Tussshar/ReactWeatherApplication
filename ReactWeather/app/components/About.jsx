var React = require('react');

/*
var About = React.createClass({
  render: function(){
    return (
      <h3>About component</h3>
    );
  }
});
*/

/*
  Since this component simply renders something on the screen
  and doesnot maintain state. We can use stateless functional component
*/
var About = (props) => {
  return (
    <h3>About component</h3>
  )
};
module.exports = About;
