$(document).ready(function() {
  var humanizedGreeting = getGreetingTime(moment());
  $('.helloTime').text(humanizedGreeting);
});

function getGreetingTime(m) {
  var g = null;

  if (!m || !m.isValid()) {
    return;
  }
  var split_night = 24;
  var split_morning = 6;
  var split_afternoon = 12;
  var split_evening = 18;
  var currentHour = parseFloat(m.format("HH"));

  if (currentHour >= split_afternoon && currentHour < split_evening) {
    g = "Добрый день!";
  } else if (currentHour >= split_evening && currentHour < split_night) {
    g = "Добрый вечер!";
  } else if (currentHour >= split_morning && currentHour < split_afternoon) {
    g = "Доброе утро!";
  } else if (currentHour >= 0 && currentHour < split_morning) {
    g = "Доброй ночи!";
  }

  return g;
}