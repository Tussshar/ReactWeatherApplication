var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal')

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


    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp){
      console.log("success");
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(e){
      console.log("Failure");
      console.log(e.message);
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });

    });
    /*this.setState({
      location: location,
      temp: 23
    });*/
  },
  componentDidMount: function(){//Sec7, Lect 61
    /*
      When we use Router we get access to ton of props,
      some of them being a query string of url
    */
    var location = this.props.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      //would remove query string from url once it is successfully searched
      window.location.hash = '#/';

    }
  },
  componentWillReceiveProps: function(newProps){
    /*
      This function is gonna get called any time the components props
      will get updated.
      If we dont write this function then
      if we search using the search box at the top from home page then
      nothing would happen because component is already rendered
      and it doesnot know how to update itself
    */
    var location = newProps.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      //would remove query string from url once it is successfully searched
      window.location.hash = '#/';

    }
  },
  render: function(){
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h2 className="text-center">Fetching weather...</h2>;
      }else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError(){
      if (typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
