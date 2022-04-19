import tabs from "./module/tabs.js";
import getClock from "./module/clock.js";
import {stopwatch, startStopwatch, pauseStopwatch, resetStopwatch} from "./module/stopwatch.js";

export { htmlElements }
//Fields
const htmlElements = {};
htmlElements.startBtn = document.querySelector(".container .buttons button.start");
htmlElements.stopBtn = document.querySelector(".container .buttons button.stop");
htmlElements.resetBtn = document.querySelector(".container .buttons button.reset");
htmlElements.clock = document.querySelector(".container .output .clock");
htmlElements.stopwatch = document.querySelector(".container .links .stopwatch");
htmlElements.timer = document.querySelector(".container .links .timer");
htmlElements.output = document.querySelectorAll(".output > [data-mode]");
htmlElements.getstopwatch = document.querySelector(".container .getstopwatch");
htmlElements.millisecond = document.querySelector(".millisecond");
htmlElements.second = document.querySelector(".second");
htmlElements.minute = document.querySelector(".minute");
htmlElements.hour = document.querySelector(".hour");
htmlElements.links = document.querySelectorAll('.links > a');

//Listener
htmlElements.links.forEach(link => link.addEventListener('click', tabs))
htmlElements.startBtn.addEventListener("click", startStopwatch)
htmlElements.stopBtn.addEventListener("click", pauseStopwatch)
htmlElements.resetBtn.addEventListener("click", resetStopwatch)