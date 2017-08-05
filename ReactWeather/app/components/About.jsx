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
    <div>
        <h1 className="text-center">About</h1>
        <p>This is a weather application build on React.
          I have built this for 'The Complete React Web App Developer Course'.
        </p>
        <div>
          <p>
            Here are some of the tools I used:
          </p>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the
              JavaScript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - I used
              Open Weather Map to search for weather data by city name.
          </li>
        </div>
        <div>
          <p>You can find the github repo for this project at the following link:</p>
          <li>
            <a href="https://github.com/Tussshar/ReactWeatherApplication">React Weather Application</a>
          </li>
        </div>
    </div>
  )
};
module.exports = About;
