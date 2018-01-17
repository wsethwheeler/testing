/* function expression (a.k.a "function on the fly 
 * This function is loaded when this line is hit...
 * with normal functions they are loaded at the top of run.
 * 
 * This example is done anonymously (meaning, no function name is given)
 */
var diff = function (a, b) {
    return a*a - b*b;
};

diff(9, 5); //You call function expressions using the VAR name (not func name)

//To see a function expression... log it out!
console.log("My diff function expression: " + diff);

var greeting1 = function (){
    alert("Why hello there!");
};

var greeting2 = function (){
    alert("What's good?");
};

function giveGreeting(message){
    message();
}

/* Example of passing a function expression in as an argument */
//giveGreeting(greeting1);
//giveGreeting(greeting2);

/* You can pass a function expression to an array's ".map" function...
 * It works in place of a for loop, calling the passed FE on each element.
 */

var numbers = [12, 4, 3, 9, 8, 6, 10, 1];

console.log("numbers array: " + numbers);

var results = numbers.map(function(arrayCell) {
    return arrayCell * 2;
});

console.log("results array [doubled]: " + results);

/* You can keep an array of FEs! */
var puzzlers = [
  function(input){
    return 3 * input - 8;
  }, 
  function(input){
    return (input+2)*(input+2)*(input+2);
  }, 
  function(input){
    return (input * input) - 9;
  }, 
  function(input){
    return input % 4;
  }
];

var testNum = 5;

for(var i = 0; i < puzzlers.length; i++){
  var currFunc = puzzlers[i];
  console.log("Passing " + testNum + " to " + currFunc + "\nResult: " + currFunc(testNum));
}

var returnsFE = function(bool){
  if(bool){
      return function(){console.log("TRUE given");};
  }
  else{
      return function(){console.log("FALSE given");};
  }
};

//No extra parens... just print return func
console.log(returnsFE(true));

//With extra parens... run the expression!
returnsFE(false)();