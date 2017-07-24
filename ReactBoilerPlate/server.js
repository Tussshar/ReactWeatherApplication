/*
require is the node keyword to load in the module.
reuire takes only one argument i.e. module name
*/
var express = require('express'); //This gives us access to entire express api



//create our app
var app = express();

/*
App.use lets u add functionality to ur application
*/
app.use(express.static('public'));

app.listen(3000, function(){
	console.log('Express server is on port 3000');
});