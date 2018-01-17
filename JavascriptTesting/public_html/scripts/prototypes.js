/************ PROTOTYPES OVERVIEW ************/

/* Objects are all children of the "Object Prototype", so they all inherit these properties:
 *      valueOf
 *      constructor
 *      toLocaleString
 *      toString
 *      isPrototypeOf
 *      peropertyIsEnumerable
 *      hasOwnProperty
 *  
 *  --------
 *  
 *  There are also parent Prototypes for arrays, strings, numbers, and functions.
 *  That's where stuff like ".length", ".charAt()", and ".pop()" come from.
 *  Those are, in turn, children of the Object prototype (just like Java Object)
 */

//You can add functions to these parent prototypes so they get given to EVERY subtype
//Let's add a 'countAll' to strings 
String.prototype.countAll = function(letter){
    var count = 0;
    
    for(var i = 0; i<this.length; i++){
        if(this.charAt(i).toLowerCase() === letter){
            count++;
        }
    }
    return count;
};

var testString = "Why hello there, my friend!  How are you doing?";

console.log("Number of e's in '" + testString + "': " + testString.countAll("e"));

/************ CONSTRUCTORS ************/

//You can clone objects using Object.create()
var exShoe = {size: 6, gender: "women", type: "slipper"};
var cloneShoe = Object.create(exShoe);

//Check to see if the prototype worked
console.log(exShoe.isPrototypeOf(cloneShoe));

/* Let's make a shoe class with a constructor
 * Give it a CAPITAL letter to indicate it is a class constructor
 */
function NoobShoe (shoeSize, shoeColor, forGender, constructStyle){
    this.size = shoeSize;
    this.color = shoeColor;
    this.gender = forGender;
    this.construction = constructStyle;
    
    this.putOn = function() { alert("Shoe's on!"); };
    this.takeOff = function() { alert("Shoe's off..."); };
}

var beachShoe = new NoobShoe(10, "blue", "women", "flipflop");

//You can, of course, add stuff to the created Object:
beachShoe.straps = 2;

console.log("We created a beachShoe!");
console.log(beachShoe);

/* That example was okay, but it kind of sucked because the putOn and takeOff functions
 *   will be copied into every shoe.  Inefficient!
 *   
 * Use a prototype to get around this.
 */

Shoe.prototype = {
    //Prototypes can reach back down into objects for info; neat
    putOn: function() { console.log("Your " + this.construction + " is on!"); },
    takeOff: function() { console.log("EW - your size " + this.size + " shoes stink..."); }
};

function Shoe (shoeSize, shoeColor, forGender, constructStyle){
    this.size = shoeSize;
    this.color = shoeColor;
    this.gender = forGender;
    this.construction = constructStyle;
}

var betterShoe = new Shoe(8, "red", "women", "stilleto");

//This will have the prototype's functions
console.log(betterShoe);
betterShoe.putOn();
betterShoe.takeOff();

/************ Overriding Prototypal Methods ************/
var x = 4;
var y = "4";

console.log(x.valueOf() == y.valueOf()); // THIS IS TRUE, even though x is number and y is string
console.log(x.valueOf() === y.valueOf()); //THIS IS FALSE; triple equals compares TYPE as well as value

//Let's override the valueOf on an object

var Tornado = function(category, affectedAreas, windGust){
    this.category = category;
    this.affectedAreas = affectedAreas;
    this.windGust = windGust;
};

Tornado.prototype.valueOf = function(){
    var sum = 0;
    for(var i = 0; i < this.affectedAreas.length; i++){
        sum += this.affectedAreas[i][1];
    }
    return sum;
};

Tornado.prototype.toString = function(){
    var list = "";
    
    for(var i = 0; i < this.affectedAreas.length; i++){
        if(i < this.affectedAreas.length - 1){
            list += this.affectedAreas[i][0] + ", ";
        }
        else{
            list += "and " + this.affectedAreas[i][0];
        }
    }
    
    return "This tornado has been classified as an " + this.category +
            ", with wind gusts up to " + this.windGust + "mph. Affected areas are: " +
            list + ", potentially affecting a population of " + this.valueOf() + ".";
};

var cities = [["Kansas City", 513234],["Topeka", 113423],["Lenexa", 41234]];
var twister = new Tornado("F5", cities, 220);

console.log("Sum of all affected people in cities: " + twister.valueOf());

cities.push(["Olathe", 130045]);

console.log("New sum of all affected people in cities: " + twister.valueOf());

console.log(twister.toString());

//Get the constructor:
console.log(twister.constructor);

//Get the prototype:
console.log(twister.constructor.prototype);
  //OR
console.log(twister.__proto__);

//Function to find owner in a prototype chain
Object.prototype.findOwnerOfProperty = function(propName){
    var currentObject = this;
    
    while(currentObject !== null){
        if(currentObject.hasOwnProperty(propName)){
            return currentObject;
        }
        else{
            currentObject = currentObject.__proto__;
        }
    }
    
    return "No property found!";
};

console.log(twister.findOwnerOfProperty("valueOf")); //Tornado
console.log(twister.findOwnerOfProperty("goToOz")); //Doesn't exist