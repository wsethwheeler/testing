$(document).ready(function(){
    //Create a new node... but it's not attached yet
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    
    //When ANY button is clicked (only one on our page), do this event handler...
    $('button').on('click', function(){
        //Select '.tour' node and attach the 'message' node to the DOM
        $(this).closest('.tour').append(message);
        
        /* Remove the button that was clicked...
         * Important!  If 'this' were not used, ALL buttons would be removed :(
         */
        $(this).remove(); 
    });
    
    //Alternative: $(price).appendTo('#destinations');
    
    /* Other options for adding nodes to DOM:
     *  .appendTo(<element>)
     *  .prependTo(<element>)
     *  .insertAfter(<element>)
     *  .insertBefore(<element>)
     */
});