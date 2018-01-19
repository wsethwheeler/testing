//Select stuff using traversal
$("#destinations").find("li"); //Equivalent to $("#destinations li");

/* Two parts: the 'selection' and the 'traversal'
 * 
 * $("#destinations").find("li");
 *    ^selection        ^traversal
 *    
 * It takes a bit more code... but it's faster!
 */

$("li").first(); //Equivalent to $("li:first");

//Find middle element by walking the DOM
$("li").first().next(); //This is 'method chaining'

//Traverse up the DOM
$("li").first().parent();

//Traverse down the DOM
$("#destinations").children("li"); //Children gets direct descendants