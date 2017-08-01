var React = require('react');
/*
var WeatherMessage = React.createClass({
  render: function(){
    var {temp, location} = this.props;

    return (
      <h3>It is {temp} in {location}</h3>
    );
  }
});*/

/*
stateless functional component
var WeatherMessage = (props) => {
  var {temp, location} = props;

  return (
    <h3>It is {temp} in {location}</h3>
  );
};
*/

//using ES6 destructuring inside our argument
var WeatherMessage = ({temp, location}) => {
  //var {temp, location} = props;

  return (
    <h2 className="text-center">It is {temp} in {location}</h2>
  );
};

module.exports = WeatherMessage;
