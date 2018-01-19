//Use this line to make sure the jQuery runs *after* the html is fully loaded
jQuery(document).ready(function(){
    //Swap the text of the header... keep in mind this picks ALL 'h1' elements!
    $("h1").text("jQuery done did it!");
});

//$() is an alias for jQuery()... much less typing!

$("#destinations"); // find the destinations list

$(".promo"); // find the element(s) using the promo class

$("#destinations li"); // select ALL li's underneath destinations id
$("#destinations > li"); // select ONLY the direct descendants of destinations

//Multiple selector
$(".promo, #france"); //The comma allows you to select multiple items

//CSS-like pseudo classes
$("#destinations li:first"); //pick the first child
$("#destinations li:last"); // pick the last child
$("#destinations li:even"); // pick all the even items (index starts at 0)
$("#destinations li:odd"); // pick all the odd items (index starts at 0)