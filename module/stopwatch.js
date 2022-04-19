import { htmlElements } from "../main.js";

let hour = 0,
  minute = 0,
  second = 0,
  millisecond = 0,
  interval;

  function stopwatch() {
  //Millisecond
  millisecond++;
  htmlElements.millisecond.innerText =
    millisecond < 9 ? `0${millisecond}` : millisecond;
  if (millisecond > 99) {
    second++;
    htmlElements.second.innerText = `0${second}`;
    millisecond = 0;
    htmlElements.millisecond.innerText = `0${millisecond}`;
  }
  htmlElements.second.innerText = second < 10 ? `0${second}` : second;
  //second
  if (second > 59) {
    minute++;
    htmlElements.minute.innerText = `0${minute}`;
    second = 0;
    htmlElements.second.innerText = `0${second}`;
  }
  htmlElements.minute.innerText = minute < 10 ? `0${minute}` : minute;
  //hour
  if (minute > 59) {
    hour++;
    htmlElements.hour.innerText = `0${hour}`;
    minute = 0;
    htmlElements.minute.innerText = `0${minute}`;
  }
  htmlElements.hour.innerText = hour < 10 ? `0${hour}` : hour;
}

function startStopwatch() {
  clearInterval(interval);
  interval = setInterval(stopwatch, 10);
}

function pauseStopwatch() {
  clearInterval(interval);
}
function resetStopwatch() {
  clearInterval(interval);
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  htmlElements.hour.innerText = "00";
  htmlElements.minute.innerText = "00";
  htmlElements.second.innerText = "00";
  htmlElements.millisecond.innerText = "00";
}

export {stopwatch}
export {startStopwatch}
export {pauseStopwatch}
export {resetStopwatch}
