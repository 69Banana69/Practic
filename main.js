//Fields
const htmlElements = {};
htmlElements.startBtn = document.querySelector(
  ".container .buttons button.start"
);
htmlElements.stopBtn = document.querySelector(
  ".container .buttons button.stop"
);
htmlElements.resetBtn = document.querySelector(
  ".container .buttons button.reset"
);
htmlElements.clock = document.querySelector(".container .links .clock");
htmlElements.stopwatch = document.querySelector(".container .links .stopwatch");
htmlElements.timer = document.querySelector(".container .links .timer");
htmlElements.output = document.querySelector(".container .output");
htmlElements.getstopwatch = document.querySelector(".container .getstopwatch");
htmlElements.millisecond = document.querySelector(".millisecond");
htmlElements.second = document.querySelector(".second");
htmlElements.minute = document.querySelector(".minute");
htmlElements.hour = document.querySelector(".hour");

//Listener
htmlElements.stopwatch.addEventListener("click", function () {
  clearInterval(clockInterval);
  this.classList.add("selected");
  htmlElements.getstopwatch.classList.remove("hidden");
  htmlElements.clock.classList.remove("selected");
  htmlElements.output.classList.add("hidden");
  htmlElements.timer.classList.remove("selected");
});

htmlElements.clock.addEventListener("click", function () {
  clockInterval = setInterval(getClock, 1000);
  this.classList.add("selected");
  htmlElements.output.classList.remove("hidden");
  htmlElements.stopwatch.classList.remove("selected");
  htmlElements.getstopwatch.classList.add("hidden");
  htmlElements.timer.classList.remove("selected");
});

htmlElements.timer.addEventListener("click", function () {
  this.classList.add("selected");
  htmlElements.clock.classList.remove("selected");
  htmlElements.output.classList.add("hidden");
  htmlElements.stopwatch.classList.remove("selected");
  htmlElements.getstopwatch.classList.add("hidden");
});

htmlElements.startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startStopwatch, 10);
});

htmlElements.stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

htmlElements.resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  hour = 00;
  minute = 00;
  second = 00;
  millisecond = 00;
  htmlElements.hour.innerText = "00";
  htmlElements.minute.innerText = "00";
  htmlElements.second.innerText = "00";
  htmlElements.millisecond.innerText = "00";
});

//Clock
let clockInterval = setInterval(getClock, 1000);

function getClock() {
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) hours = "0" + hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = "0" + seconds;

  htmlElements.output.textContent = `${hours}:${minutes}:${seconds}`;
}

//Stopwatch

let hour = 00,
  minute = 00,
  second = 00,
  millisecond = 00,
  interval;

function startStopwatch() {
  millisecond++;
  millisecond < 9
    ? (htmlElements.millisecond.innerText = "0" + millisecond)
    : (htmlElements.millisecond.innerText = millisecond);
  if (millisecond > 99) {
    second++;
    htmlElements.second.innerText = "0" + second;
    millisecond = 0;
    htmlElements.millisecond.innerText = "0" + millisecond;
  }
  second < 10
    ? (htmlElements.second.innerText = "0" + second)
    : (htmlElements.second.innerText = second);

  if (second > 59) {
    minute++;
    htmlElements.minute.innerText = "0" + minute;
    second = 0;
    htmlElements.second.innerText = "0" + second;
  }
  minute < 10
    ? (htmlElements.minute.innerText = "0" + minute)
    : (htmlElements.minute.innerText = minute);

  if (minute > 59) {
    hour++;
    htmlElements.hour.innerText = "0" + hour;
    minute = 0;
    htmlElements.minute.innerText = "0" + minute;
  }
  hour < 10
    ? (htmlElements.hour.innerText = "0" + hour)
    : (htmlElements.hour.innerText = hour);
}
