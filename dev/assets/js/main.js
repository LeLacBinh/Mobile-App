$(document).ready(function() {
    // Header icon click
    $(".menu-trigger").click(function() {
        $(this).toggleClass('active');
        $('.c-header__menu').toggleClass('is-active');

    })
    $('.c-loading').fadeOut(1000);
})