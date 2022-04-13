$(document).ready(function () {
    js_calendar()
  //Add padding top
  $("main").css({
    "padding-top": $("#the_header").outerHeight(),
    "padding-bottom": $("#the_footer").outerHeight(),
  });

  // Header icon click
  $(".menu-trigger").click(function () {
    $(this).toggleClass("active");
    $(".c-header__menu").toggleClass("is-active");
  });
  //Add padding top
  $("main").css("padding-top", $(".c-header").outerHeight());
  $("main").css("padding-top", $(".c-headerv2").outerHeight());
  setTimeout(function () {
    $(".c-loading").fadeOut(1000);
  }, 1000);
});

// --- Create a Simple Calendar ---
function js_calendar() {
  var currentDate = new Date();
  function generateCalendar(d) {
    function monthDays(month, year) {
      var result = [];
      var days = new Date(year, month, 0).getDate();
      for (var i = 1; i <= days; i++) {
        result.push(i);
      }
      return result;
    }
    Date.prototype.monthDays = function () {
      var d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
      return d.getDate();
    };
    var details = {
      // totalDays: monthDays(d.getMonth(), d.getFullYear()),
      totalDays: d.monthDays(),
      weekDays: ["日", "月", "火", "水", "木", "金	", "土"],
      months: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
    };
    var start = new Date(d.getFullYear(), d.getMonth()).getDay();
    var cal = [];
    var day = 1;
    let the_date,no_note;
    for (var i = 0; i <= 6; i++) {
      cal.push(["<tr>"]);
      for (var j = 0; j < 7; j++) {
        if (i === 0) {
          cal[i].push("<td>" + details.weekDays[j] + "</td>");
        } else if (day > details.totalDays) {
          cal[i].push("<td>&nbsp;</td>");
        } else {
          if (i === 1 && j < start) {
            cal[i].push("<td>&nbsp;</td>");
          } else {
            the_date = currentDate.getFullYear()+'年'+details.months[d.getMonth()] + day+'日'
            no_note = true
            for( var _i = 0; _i < notice.length; _i++ ){
              if(notice[_i].date === the_date){
                no_note = false;
                cal[i].push('<td onclick="calendar_show_content(this)" class="day" data-date="'+ the_date +'" data-note="'+ _i +'"><span>' + day++ + '</span><p>' + notice[_i].desc.earn + '</p></td>');
              }
            }
            if(no_note){
              cal[i].push('<td onclick="calendar_show_content(this)" class="day" data-date="'+ the_date +'" data-note="no"><span>' + day++ + '</span></td>');
            }
          }
        }
      }
      cal[i].push("</tr>");
    }
    cal = cal
      .reduce(function (a, b) {
        return a.concat(b);
      }, [])
      .join("");
    $(".js-table").append(cal);
    // $('#month').text(details.months[d.getMonth()]);
    // $('#year').text(d.getFullYear());
    $(".js-table .day")
      .mouseover(function () {
        $(this).addClass("hover");
      })
      .mouseout(function () {
        $(this).removeClass("hover");
      });
  }
  // Function Change Month when click
  $("#left").click(function () {
    $(".js-table").text("");
    if (currentDate.getMonth() === 0) {
      currentDate = new Date(currentDate.getFullYear() - 1, 11);
      generateCalendar(currentDate);
    } else {
      currentDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1
      );
      generateCalendar(currentDate);
    }
  });
  $("#right").click(function () {
    $(".js-table").html("<tr></tr>");
    if (currentDate.getMonth() === 11) {
      currentDate = new Date(currentDate.getFullYear() + 1, 0);
      generateCalendar(currentDate);
    } else {
      currentDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1
      );
      generateCalendar(currentDate);
    }
  });
  generateCalendar(currentDate);
}

function calendar_show_content(_t){
  // Show Content Box
  if(!$('.p-daily__content').hasClass('p-daily__content--show')){
    $('.p-daily__content').addClass('p-daily__content--show')
  }
  // Show detail information
  const note_id = $(_t).data('note')
  
  if(note_id != 'no'){
    const the_target = notice[note_id].desc
    $('.p-daily__no-note').hide()
    $('.p-daily__has-note').fadeIn(500)
    // Replace the data
    $('#date_earn').html(the_target.earn)
    $('#date_pairs').html(the_target.pairs.lunch + the_target.pairs.dinner)
    $('#date_pairs_lunch').html(the_target.pairs.lunch)
    $('#date_pairs_dinner').html(the_target.pairs.dinner)
    $('#date_people').html(the_target.people.lunch + the_target.people.dinner)
    $('#date_people_lunch').html(the_target.people.lunch)
    $('#date_people_dinner').html(the_target.people.dinner)
  }else{
    $('.p-daily__has-note').hide()
    $('.p-daily__no-note').fadeIn(500)
  }
  // Change The title Content box
  $('.p-daily__head h3').html($(_t).data('date'))
}