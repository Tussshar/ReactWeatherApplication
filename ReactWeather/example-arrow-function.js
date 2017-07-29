/*
  To run this file, we can go to the folder in terminal and type node filename
  i.e. node examples-arrow-function.js
*/

var names = ['Andrew', 'Julie', 'Jen'];
/*
names.forEach(function(name){
  console.log('forEach', name);
});
*/
/*
  We can simplify this code with arrow function.
  Arrow functions are great because we can be use in place of anonymous function

  If u are trying to figure out if u shud use arrow function ask a question
  are u using it for anonymous function
*/
/*
names.forEach((name) => {
  console.log('arrowFunc', name);
});
*/
//2nd example
/*
var returnMe = (name) => name + '!';//whatever u write here gets returned automatically
console.log(returnMe('Andrew'));
*/
/*
  Difference between arrow function and anonymous function

  anonymous function takes 'this' binding
  arrow function takes parent's 'this' binding
*/

var person = {
  name: 'Tushar',
  greet: function(){
    names.forEach(function(name){
      console.log(this.name + 'says hi to ' + name);
    });
  }
};

person.greet;//will print undefined in place of tushar, bcoz this is anonymous function

var person = {
  name: 'Tushar',
  greet: function(){
    names.forEach((name) => {
      console.log(this.name + 'says hi to ' + name);
    });
  }
};
