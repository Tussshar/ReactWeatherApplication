var Greeter = React.createClass({
  render: function(){//This function expects that u renter some jsx code that can be rendered in browser

    //When you are going to return JSX, you have to return only one root element
    return (
      <div>
        <h1>Hello React!!</h1>
        <p>This is displayed using component</p>
      </div>
      //Adding second div right here wont work. Everything has to be in single element only
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
