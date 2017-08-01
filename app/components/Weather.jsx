var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    /*
      this binding gets lost when we are in function mentioned below
    */
    var that = this;


    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage){
      that.setState({
        isLoading: false
      });
      alert(errorMessage);

    });
    /*this.setState({
      location: location,
      temp: 23
    });*/
  },
  render: function(){
    var {isLoading, temp, location} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h2 className="text-center">Fetching weather...</h2>;
      }else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
