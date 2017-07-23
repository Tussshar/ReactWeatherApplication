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
  onButtonClick: function(e){
    /*
      This will stop form from submitting and cause the page to refresh
    */
    e.preventDefault();

    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';//This would make input box empty

    if(typeof name === 'string' && name.length > 0){
      this.setState({
        name: name
      });
    }
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
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
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
