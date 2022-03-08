var minutes = 15;
var seconds = "00";

function template() {
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

function start() {
  minutes = 14;
  seconds = 59;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

  function minutesTimer() {
    minutes = minutes - 1;
    document.getElementById("minutes").innerHTML = minutes;
  }
  function secondsTimer() {
    seconds = seconds - 1;
    document.getElementById("seconds").innerHTML = seconds;

    if (seconds <= 0) {
      if (minutes <= 0) {
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        document.getElementById("message").innerHTML = "Done";

        document.getElementById("message").classList.add("show-message");
      }
      seconds = 60;
    }
  }
}
