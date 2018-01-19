$(document).ready(function(){
    //Create a new node... but it's not attached yet
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    
    $('.book').on('click', function(){
        $(this).closest('.tour').append(message);
        
        $(this).remove(); 
    });
    
    //Add filters
    $('#filters').on('click', '.on-sale', function () {
        $('.highlight').removeClass('highlight');
        $('.tour').filter('.on-sale').addClass('highlight');
    });

    $('#filters').on('click', '.featured', function () {
        $('.highlight').removeClass('highlight');
        $('.tour').filter('.featured').addClass('highlight');
    });
});