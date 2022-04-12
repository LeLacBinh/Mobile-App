$(document).ready(function() {
    $(".js-clickScroll").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
            scrollTop: $(hash).offset().top - $('.c-headerv2').outerHeight()
            }, 800);
        }
      });
    //Add padding top
    $('main').css({
        'padding-top': $('#the_header').outerHeight(),
        'padding-bottom': $('#the_footer').outerHeight()
    })

    // Header icon click
    $(".menu-trigger").click(function() {
            $(this).toggleClass('active');
            $('.c-header__menu').toggleClass('is-active');

        })
        //Add padding top
    $('main').css('padding-top', $('.c-header').outerHeight())
    $('main').css('padding-top', $('.c-headerv2').outerHeight())
    setTimeout(function() {
        $('.c-loading').fadeOut(1000);
    }, 1000)
})