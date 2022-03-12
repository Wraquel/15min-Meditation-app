//declare buttuns
var start = document.getElementById("start");
var reset = document.getElementById("reset");

//declare variables
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

var bell_meditate = new Audio("./midia/bell_meditate.mp3");

//declare a reference to a countner variable that can be undefide or define in functions
var startCountner;
// Começar o timer-estabelecer intervalo de 1000 ms, quando a variavel startCountner for indefinida
function Start() {
  bell_meditate.play();
  if (startCountner === undefined) {
    startCountner = setInterval(timer, 1000);
    document.getElementById("daily-title").innerHTML = "Your daily";
    document.getElementById("daily-title").classList.add("daily-title");
    document.getElementById("meditation-title").innerHTML = "Meditation";
    document
      .getElementById("meditation-title")
      .classList.add("meditation-title");
    document.getElementById("pulse").style.animation =
      "pulse 4s infinite alternate";
  } else alert("Time is already running");
}

// Resetar o timer-parar intervalo, quando a variavel startCountner for indefinida e reestabelecer timer inicial
function Reset() {
  minutes.innerText = 15;
  seconds.innerText = "00";
  stopInterval();
  startCountner = undefined;
}

//Start Timer quando os segundos forem diferentes de 0, diminuir os segundos de 1 em 1.
//Mas se os minutos forem diferentes de 0 e os segundosiguais a 0, tornar segundos 59
//e diminuir minutos de 1 em 1
function timer() {
  if (seconds.innerText != 0) {
    seconds.innerText--;
  } else if (minutes.innerText != 0 && seconds.innerText == 0) {
    seconds.innerText = 59;
    minutes.innerText--;
  } else if (seconds.innerText == 0 && minutes.innerText == 0) {
    document.getElementById("daily-title").innerHTML = "";
    document.getElementById("meditation-title").innerHTML = "Namastê";
    document
      .getElementById("meditation-title")
      .classList.add("message-namaste");
    audio();
    Reset();
  }
}
function audio() {
  bell_meditate.play();

  Reset();
}
// Parar o timer-limpar intervalo
function stopInterval() {
  clearInterval(startCountner);
  document.getElementById("pulse").style.animation = "none";
}
