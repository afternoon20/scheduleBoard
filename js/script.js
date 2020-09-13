document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'Asia/Tokyo',
    locale: 'ja',
    initialView: 'resourceTimelineDay',
    aspectRatio: 1.5,
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth',
    },
    editable: true,

    titleFormat: { year: 'numeric', month: 'short', day: 'numeric' },

    resourceAreaHeaderContent: '名前',
    resources: 'https://fullcalendar.io/demo-resources.json?with-nesting&with-colors',
    events: 'https://fullcalendar.io/demo-events.json?single-day&for-resource-timeline',
  });

  calendar.render();
});

// 予約画面
var now = new Date();
var y = now.getFullYear();
var m = now.getMonth() + 1;
var d = now.getDate();
if (m < 10) {
  m = '0' + m;
}
if (d < 10) {
  d = '0' + d;
}
now = y + '-' + m + '-' + d;
$('#register').click(function () {
  $('#date').attr('value', now);
});

// 連続した期間
$(function () {
  var week = $('.week');
  week.attr('disabled', 'disabled');
  var term = $('#term');

  term.click(function () {
    if (term.attr('checked') !== 'checked') {
      term.attr('checked', 'checked');

      if (term.attr('checked') == 'checked') {
        week.removeAttr('disabled');
      }
    } else {
      week.removeAttr('checked');
      term.removeAttr('checked');
      week.attr('disabled', 'disabled');
    }
  });
});

//時間選択
$(function () {
  var time_list = [];
  var h = 0;
  var hour;
  var time;
  for (let i = 0; i < 24; i++) {
    if (h < 10) {
      hour = '0' + h;
    } else {
      hour = h;
    }
    for (let j = 0; j < 2; j++) {
      if (j == 0) {
        time = hour + ':00';
        time_list.push(time);
      } else {
        time = hour + ':30';
        time_list.push(time);
      }
    }
    h++;
  }
  var start = $('#start-time-list');
  var end = $('#end-time-list');
  for (let k = 0; k < time_list.length; k++) {
    var opt = '<option value="' + time_list[k] + '"></option>';
    start.append(opt);
    end.append(opt);
  }
});
