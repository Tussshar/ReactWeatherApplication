var React = require('react');
var ReactDOM = require('react-dom');

//Syntax in ES6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
/*
  The above line creates a variable named Route, Router
  and gets its value using require
*/
/*
Code in ES5

var Route = require('react-router').Route;
Similar thing we would have to do for other variables as well
*/

var Main = require('Main');
/*var Weather = require('Weather');*/

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      //This is our first route. Using path we make sure what we want to show as a route of our application
    </Route>
  </Router>,
  document.getElementById('app')
);
