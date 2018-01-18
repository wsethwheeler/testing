//Use this line to make sure the jQuery runs *after* the html is fully loaded
jQuery(document).ready(function(){
    //Swap the text of the header... keep in mind this picks ALL 'h1' elements!
    $("h1").text("jQuery done did it!");
    
    $("#destinations"); // find the destinations list
    
    $(".promo"); // find the element(s) using the promo class
});

