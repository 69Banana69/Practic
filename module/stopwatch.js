import { htmlElements } from "../main.js";

export default class Stopwatch {
  //Millisecond
  constructor(hour, minute, second, millisecond, interval) {
    this.interval = interval;
    this.hour = hour;
    this.second = second;
    this.minute = minute;
    this.millisecond = millisecond;
  }

  render() {
    this.millisecond++;
    htmlElements.millisecond.innerText =
      this.millisecond < 10 ? `0${this.millisecond}` : this.millisecond;
    if (this.millisecond > 99) {
      this.second++;
      htmlElements.second.innerText = `0${this.second}`;
      this.millisecond = 0;
      htmlElements.millisecond.innerText = `0${this.millisecond}`;
    }
    htmlElements.second.innerText =
      this.second < 10 ? `0${this.second}` : this.second;
    //second
    if (this.second > 59) {
      this.minute++;
      htmlElements.minute.innerText = `0${this.minute}`;
      this.second = 0;
      htmlElements.second.innerText = `0${this.second}`;
    }
    htmlElements.minute.innerText =
      this.minute < 10 ? `0${this.minute}` : this.minute;
    //hour
    if (this.minute > 59) {
      this.hour++;
      htmlElements.hour.innerText = `0${this.hour}`;
      this.minute = 0;
      htmlElements.minute.innerText = `0${this.minute}`;
    }
    htmlElements.hour.innerText = this.hour < 10 ? `0${this.hour}` : this.hour;
  }

  startStopwatch() {
    if (this.interval === null) {
      let render = this.render.bind(this);
      render();
      this.interval = setInterval(function () {
        render();
      }, 10);
    }
  }

  pauseStopwatch() {
    window.clearInterval(this.interval);
    this.interval = null;

  }
  resetStopwatch() {
    clearInterval(this.interval);
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.millisecond = 0;
    htmlElements.hour.innerText = "00";
    htmlElements.minute.innerText = "00";
    htmlElements.second.innerText = "00";
    htmlElements.millisecond.innerText = "00";
    this.interval = null;

  }
}
