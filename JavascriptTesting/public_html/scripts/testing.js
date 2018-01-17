var helloWorld = "Hello World!";

console.log(helloWorld);

for(var i = 0; i <= 10; i++){
    if(i % 2 === 0){
        console.log("Test message #" + i + " is even");
    }
    else{
        console.log("Test message #" + i + " is odd");
    }
}

/* Pop up (just a message */
//alert("Generic alert!");

/* Pop up with 'confirm' or 'cancel' options; returns boolean */
//var confirmed = confirm("Did you look at the log??");  console.log("User confirm response: " + confirmed);

/* Pop up with text filed; returns string [note: string is LOWERCASE in JS] */
//var userString = prompt("Gimme something good:");  console.log("User supplied: " + userString);

/* 'typeof' useful for checking results of prompts! */
console.log("Type of helloWorld variable: " + typeof(helloWorld));

/* Making some functions */
function cubeIt(x){
    return x*x*x;
}

function sumOfCubes(x, y){
    return cubeIt(x) + cubeIt(y);
}

console.log("Summing the cubes of 3 and 4: " + sumOfCubes(3, 4));

/* you can pass expressions into functions */
console.log("sumOfCubes(1+1, 2+2): " + sumOfCubes(1+1, 2+2));

var testArray = ["item1", "item2", "item3", "item4", "item5"];
console.log("testArrray contents: " + testArray);

/* arrays have list-like functions built in 
 * Pop takes from end.
 * Shift takes from front.
 * Push goes on end
 */
var popped = testArray.pop();

console.log("Popped from testArray: " + popped);
console.log("testArrray contents: " + testArray);

var front = testArray.shift();

console.log("'Shifted' from testArray: " + front);
console.log("testArrray contents: " + testArray);

testArray = ["item1", "item2", "item3", "item4", "item5"];

var lenOfTestArray = testArray.push(popped);
console.log("testArrray contents: " + testArray);

/* Arrays grow organically, unlike Java arrays */
lenOfTestArray = testArray.push("item6");
console.log("testArrray contents: " + testArray);

/* arrays can be mixed types */
testArray = ["item1", 2, "item3", 4, "item5"];
console.log("testArrray contents: " + testArray);

/* use 'undefined' to create empty cells */
testArray = ["item1", 2, undefined, 4, "item5"];
console.log("testArrray contents: " + testArray);