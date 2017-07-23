var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMessage = React.createClass({
  render: function(){

    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}!!</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if(name.length > 0){
      this.refs.name.value = '';
      updates.name = name;
    }

    if(message.length > 0){
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates);

  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
            <input type="text" placeholder = "Enter Name" ref="name"/>
        </div>
        <div>
            <textarea placeholder = "Enter Message" ref="message"/>
        </div>
        <div>
            <button>Submit</button>
        </div>
      </form>
    );
  }
});

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

var firstName = 'Tushar';

ReactDOM.render(
  <Greeter name={firstName} message="Message from prop"/>,
  document.getElementById('app')
);
