$(document).ready(function() {
    //Add padding top
    $('main').css({
        'padding-top' : $('.c-header').outerHeight(),
        'padding-bottom' : $('.c-footer').outerHeight()
    })

    // Header icon click
    $(".menu-trigger").click(function() {
<<<<<<< HEAD
        $(this).toggleClass('active');
        $('.c-header__menu').toggleClass('is-active');
    })
=======
            $(this).toggleClass('active');
            $('.c-header__menu').toggleClass('is-active');

        })
        //Add padding top
    $('main').css('padding-top', $('.c-header').outerHeight())
    $('main').css('padding-top', $('.c-headerv2').outerHeight())
>>>>>>> origin/hung_master
    $('.c-loading').fadeOut(1000);
})