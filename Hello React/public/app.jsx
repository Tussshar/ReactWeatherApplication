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

    var name = this.refs.name.value;

    if(name.length > 0){
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <button>Set Name</button>
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
      name: this.props.name
    };
  },
  handleNewName: function(name){
    this.setState({
      name: name
    });
  },
  render: function(){//This function expects that u renter some jsx code that can be rendered in browser

    /*
      We can access props using this.props object
      this.props has all the object
    */
    var name = this.state.name;
    var message = this.props.message;

    //When you are going to return JSX, you have to return only one root element
    return (
      <div>

        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>

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
