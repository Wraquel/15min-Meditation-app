//declare buttuns
var start = document.getElementById("start");
var reset = document.getElementById("reset");

//declare variables
var wMinutes = document.getElementById("minutes");
var wSeconds = document.getElementById("seconds");

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
  } else
    alert(
      "Time is already running or please Reset the timer for another cycle."
    );
}
// Resetar o timer-parar intervalo, quando a variavel startCountner for indefinida e reestabelecer timer inicial
function Reset() {
  wMinutes.innerText = 15;
  wSeconds.innerText = "00";
  stopInterval();
  startCountner = undefined;
}
// Se segundos forem menores que 10 colocar 0 antes da variável
function formatTimer() {
  if (wSeconds.innerText <= 9) {
    wSeconds.innerText = `0${wSeconds.innerText}`;
  }
}
//Start Timer quando os segundos forem diferentes de 0, diminuir os segundos de 1 em 1.
//Mas se os minutos forem diferentes de 0 e os segundosiguais a 0, tornar segundos 59
//e diminuir minutos de 1 em 1
function timer() {
  if (wSeconds.innerText != 0) {
    wSeconds.innerText--;
    formatTimer();
  } else if (wMinutes.innerText != 0 && wSeconds.innerText == 0) {
    wSeconds.innerText = 59;
    wMinutes.innerText--;
    // Se minutos forem menores que 10 colocar 0 antes da variável
    if (wMinutes.innerText <= 9) {
      wMinutes.innerText = `0${wMinutes.innerText}`;
    }
  } else if (wSeconds.innerText == 0 && wMinutes.innerText == 0) {
    document.getElementById("daily-title").innerHTML = "";
    document.getElementById("meditation-title").innerHTML = "Namastê";
    document
      .getElementById("meditation-title")
      .classList.add("message-namaste");
    audio();
    stopInterval();
  }
}
function audio() {
  bell_meditate.play();
}
// Parar o timer-limpar intervalo
function stopInterval() {
  clearInterval(startCountner);
  document.getElementById("pulse").style.animation = "none";
}
