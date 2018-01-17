/* closures */
function testClosure(){
    var x = 4;
    function closeX(){
        return x;
    }
    return closeX;
}

var checkLocalX = testClosure();
console.log(checkLocalX());

/* okay... so what does that do??
 * can reduce code re-use
 */

function giveFood(name){
    return function(foodToGive){
        console.log("Yo, " + name + "; here's some " + foodToGive);
    };
}

var feedSeth = giveFood("Seth");
var feedKevin = giveFood("Kevin");

/* Warning: be carful when printing a closure...
 * The already inited print out as their var names!
 */
console.log(feedSeth);

feedSeth("Hamburger");
feedSeth("Hot Dog");
feedKevin("Cheese Pizza");

/* You can modify bound variables of closures
 * This becomes "secret" (if you will) to anything else calling the function.
 * The changes happen internally.
 */
function giveFood2(name){
    var timesFed = 0; //<-- this will change over time!
    return function(foodToGive){
        console.log("Yo, " + name + "; here's some " + foodToGive + " [fed " + ++timesFed + " times]");
    };
}

var feedGreg = giveFood2("Greg");

feedGreg("Beer");
feedGreg("Pizza");
feedGreg("Fries");
feedGreg("Ice Cream");

