var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

var Greeter = React.createClass({

//Incase we didnt pass values to the component then default values will be use.
  getDefaultProps: function(){
    return {
        name: 'Kale',
        message: 'This is the default message'
    };
  },
  getInitialState: function(){
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData: function(updates){
    this.setState(updates);
  },
  render: function(){//This function expects that u renter some jsx code that can be rendered in browser

    /*
      We can access props using this.props object
      this.props has all the object
    */
    var name = this.state.name;
    var message = this.state.message;

    //When you are going to return JSX, you have to return only one root element
    return (
      <div>

        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>

      </div>
      //Adding second div right here wont work. Everything has to be in single element only
    );
  }
});

module.exports = Greeter;
