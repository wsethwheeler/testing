/************ OBJECT OVERVIEW ************/

// There are multiple ways to create objects in JS

//One way is the Object literal; use curly braces
var myFirstBox = {height: 6, width: 8, length: 10, volume: 480,
    material: "cardboard",
    contents: ["book", "trophy", "gloves"]
};

//You can, of course, pass in variables too
var myContents = ["book", "trophy", "baseball", "shoes"];
var myBox = {height: 6, width: 10, length: 10, volume: 600,
    material: "cardboard",
    contents: myContents
};

//Take a peek inside using the dot operator
console.log(myBox.width);
console.log(myBox.material);
console.log(myBox.contents);

//Change contents using the dot operator, too
myBox.material = "plastic";
console.log("Changed material: " + myBox.material);

myBox.contents.push("hat");
console.log("Added item to the box: " + myBox.contents);

//You can add properties after ojbect creation, too
myBox.weight = 24;

console.log("Added a 'weight' property after creation: " + myBox.weight);

/* You can access properties using brackets + strings
 * This means you can basically think of objects as big arrays that you access
 *   via strings instead of numbers
 */
console.log("Volume: " + myBox["volume"]);

/* Since it just uses strings, this also means that you can give properties
 *   names with spaces in them... ew
 */
myBox["# of stops"] = 2;

/* This issue with using spaces is that you can no longer access it via dot operator
 *   since it will then lead to a syntax error
 *   
 * For example: 'myBox.# of stops' would not go over so well
 * 
 * This means that you HAVE to access them via brackets if they contain spaces
 */

//Dynamic expressions example
myBox.destination1 = "Baltimore";
myBox.destination2 = "Atlanta";

//Loop over the box and log out each destination
for(var i = 1; i <= myBox["# of stops"]; i++){
    console.log(myBox["destination" + i]);
}

//you can remove properties via 'delete' keyword; always returns true boolean
var alwaysTrueBool = delete myBox.contents;

//Objects can contain objects

var myBookBox = {height: 6, width: 10, length: 10, volume: 600, weight: 24,
    material: "cardboard",
    destination1: "New York",
    destination2: "Chicago",
    "# of stops": 2,
    "# of Books": 0
};

function addBook(box, name, writer){
    box["# of Books"]++;
    box["book" + box["# of Books"]] = {title: name, author: writer};
}

addBook(myBookBox, "Great Expectations", "Charles Dickens");
addBook(myBookBox, "Great Gatsby", "F. Scott Fitzgerald");
addBook(myBookBox, "Peter Pan", "J. M. Barrie");
addBook(myBookBox, "On the Road", "Jack Kerouac");

//Access objects within an object using multiple dot operators (same as Java)
console.log("The title of the first book in the box: " + myBookBox.book1.title);

//Or use the brackets
console.log("The author of the fourth book in the box: " + myBookBox["book4"]["author"]);


/************ OBJECT FUNCTIONALITY ************/

/* Object properties can be functions.  These are methods (like Java). 
 * Use the 'this' keyword to reference the object
 */
var aquarium = {
    "Marlin": {type: "fish", species: "clownfish", length: 4.1},
    "Peach": {type: "echinoderm", species: "starfish", length: 5.3},
    "Coral Castle": {type: "environment", material: "plastic", moves: false},
    "Dragon Statue": {type: "environment", material: "metal", moves: false},
    
    addCritter: function(name, type, species, length){
        this[name] = {type: type, species: species, length: length};
    }
};

aquarium.addCritter("Nemo", "fish", "clownfish", 3.7);
aquarium.addCritter("Bubbles", "fish", "yellow tang", 5.6);

//You can also add functions on the fly, just like non-method properties
aquarium.takeOut = function(name){
    this[name].name = name; //Save the name as a property on the object
    var temp = this[name]; //Use temp here so we can return it! (delete returns bool of 'true')
    delete this[name];
    return temp;
};

var fishOutOfWater = aquarium.takeOut("Marlin");

console.log(fishOutOfWater);

//We can take non-critters out, too:
var toy = aquarium.takeOut("Dragon Statue");

console.log(toy);

/************ OBJECT ENUMERATION ************/

//Generic objects don't have a length!
//aquarium.length //This causes an error if it's uncommented...

//You can, however, loop over objects like this:
var stuffInAquarium;
for(var key in aquarium){
    stuffInAquarium += key + " | ";
}

console.log("All the stuff in the aquarium: " + stuffInAquarium);

var numFish = 0;
for(var key in aquarium){
    if(aquarium[key].type === "fish"){
        numFish++;
    }
}

console.log("Number of fish in aquarium: " + numFish);

//You can, of course, use enumerations in methods

aquarium.countFish = function(){
    var numFish = 0;
    for(var key in this){
        if(this[key].type === "fish"){
            numFish++;
        }
    }
    return numFish;
};

console.log("aquarium.countFish(): " + aquarium.countFish());