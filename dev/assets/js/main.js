$(document).ready(function() {
    //Add padding top
    $('main').css({
        'padding-top' : $('.c-header').outerHeight(),
        'padding-bottom' : $('.c-footer').outerHeight()
    })

    // Header icon click
    $(".menu-trigger").click(function() {
        $(this).toggleClass('active');
        $('.c-header__menu').toggleClass('is-active');
    })
    $('.c-loading').fadeOut(1000);
})