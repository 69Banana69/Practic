import Tab from "./module/tabs.js";
import Clock from "./module/clock.js";
import Stopwatch from "./module/stopwatch.js";
import Timer from "./module/timer.js";
export { htmlElements };

//Fields
const myClock = new Clock();

const myStopwatch = new Stopwatch(0, 0, 0, 0, null);

const myTimer = new Timer(0, 0, 0, null);

const tabs = new Tab("clock");

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
htmlElements.clock = document.querySelector(".getclock");
htmlElements.stopwatch = document.querySelector(".container .links .stopwatch");
htmlElements.timer = document.querySelector(".container .links .timer");
htmlElements.output = document.querySelectorAll(".output > [data-mode]");
htmlElements.getstopwatch = document.querySelector(".container .getstopwatch");
htmlElements.millisecond = document.querySelector(".millisecond");
htmlElements.second = document.querySelector(".second");
htmlElements.minute = document.querySelector(".minute");
htmlElements.hour = document.querySelector(".hour");
htmlElements.links = document.querySelectorAll(".links > a");
htmlElements.getTimer = document.querySelector(".container .output .timer");
htmlElements.getTimerTime = document.querySelectorAll(
  ".container .output .timer .time > div"
);
htmlElements.timerSec = document.querySelector(
  ".container .output .timer .time .second"
);
htmlElements.timerMin = document.querySelector(
  ".container .output .timer .time .minute"
);
htmlElements.timerHour = document.querySelector(
  ".container .output .timer .time .hour"
);
htmlElements.timerStart = document.querySelector(
  ".container .output .timer .buttons .start"
);
htmlElements.timerEdit = document.querySelector(".edit");
htmlElements.timerReset = document.querySelector(
  ".container .output .timer .buttons .reset"
);
htmlElements.timerStop = document.querySelector(
  ".container .output .timer .buttons .stop"
);

htmlElements.timerOver = document.querySelector(".over");

//Listener

//Timer
myTimer.showTimer();
htmlElements.timerStart.addEventListener("click", function () {
  myTimer.startTimer();
});
htmlElements.timerStop.addEventListener("click", function () {
  myTimer.stopTimer();
});
htmlElements.timerEdit.addEventListener("click", function () {
  myTimer.getTime();
  this.classList.add("hidden");
  htmlElements.getTimerTime.forEach((time) =>
    time.setAttribute("contenteditable", "false")
  );
});

htmlElements.timerReset.addEventListener("click", function () {
  myTimer.resetTimer();
});

htmlElements.getTimerTime.forEach((time) =>
  time.addEventListener("click", function () {
    this.setAttribute("contenteditable", "true");
    htmlElements.timerEdit.classList.remove("hidden");
  })
);

//Stopwatch
htmlElements.startBtn.addEventListener("click", function () {
  myStopwatch.startStopwatch();
});
htmlElements.stopBtn.addEventListener("click", function () {
  myStopwatch.pauseStopwatch();
});
htmlElements.resetBtn.addEventListener("click", function () {
  myStopwatch.resetStopwatch();
});
htmlElements.links.forEach((link) =>
  link.addEventListener("click", function onTabClick() {
    htmlElements.links.forEach((link) => link.classList.remove("selected"));
    this.classList.add("selected");
    const mode = this.getAttribute("data-mode");
    tabs.changeTab(mode);
    tabs.updateClock(htmlElements);
  })
);

//Clock
myClock.startClock();
