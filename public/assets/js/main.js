$(document).ready(function() {
    //Add padding top
    $('main').css({
        'padding-top': $('.c-header').outerHeight(),
        'padding-bottom': $('.c-footer').outerHeight()
    })

    // Header icon click
    $(".menu-trigger").click(function() {
            $(this).toggleClass('active');
            $('.c-header__menu').toggleClass('is-active');

        })
        //Add padding top
    $('main').css('padding-top', $('.c-header').outerHeight())
    $('main').css('padding-top', $('.c-headerv2').outerHeight())
<<<<<<< HEAD
    setTimeout(function() {
        $('.c-loading').fadeOut(1000);
    }, 1000)
=======
    setTimeout(function(){
        $('.c-loading').fadeOut(1000);
    },1000)
>>>>>>> master
})