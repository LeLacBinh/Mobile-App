$(document).ready(function() {
    var xValues = ["ホール", "キッチン", "マネジメント"];
    var yValues = [89, 52, 70];
    var barColors = ["#60a48d", "#8da9db","#ffd44b"];

    new Chart("skill_chart_01", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColors,
        data: yValues
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins:{
            legend:{ display: false}
        }
    }
    });
    $('#skill_chart_01').height(200)
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
    setTimeout(function(){
        $('.c-loading').fadeOut(1000);
    },1000)
})