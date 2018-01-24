//Manipulate css via jQuery
//$(li).css({'background-color': '#252b30', 'font-weight': 'bold'});

$(document).ready(function () {
    $('#nights').on('keyup', function () {
        var nights = +$(this).val();
        var dailyPrice = +$(this).closest(".exTour").data("daily-price");
        $('#total').text(nights * dailyPrice);
        $('#nights-count').text($(this).val());
    });

    $('#nights').on('focus', function () {
        $(this).val(7);
    });

    /******************************************************************/

    $('.see-photos').on('click', function (event) {
        event.stopPropagation();
        event.preventDefault();
        $(this).closest('.tour').find('.photos').slideToggle();
    });
    $('.tour').on('click', function () {
        alert('This event handler should not be called.');
    });

    /******************************************************************/

    $("#coolPhotos").on('click', 'button', function () {
        $('.exPhotos').slideToggle();
    });
});
