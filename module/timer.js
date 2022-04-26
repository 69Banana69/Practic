import { htmlElements } from "../main.js";

export default class Timer {
  constructor(hour, minute, second, interval) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
    this.interval = interval;
  }
  showTimer() {
    htmlElements.timerMin.innerText =
      this.minute < 10 ? `0${this.minute}` : this.minute;
    htmlElements.timerSec.innerText =
      this.second < 10 ? `0${this.second}` : this.second;
    htmlElements.timerHour.innerText =
      this.hour < 10 ? `0${this.hour}` : this.hour;
  }

  getTime() {
    this.stopTimer();
    this.hour = prompt("Введите часы:");
    this.minute = prompt("Минуты");
    this.second = prompt("Секунды");

    this.showTimer();
  }

  render() {
    --this.second;
    if (this.second < 0) {
      --this.minute;
      this.second = 59;
    }
    if (this.minute < 0) {
      --this.hour;
      this.minute = 59;
    }

    if (this.hour === 0 && this.minute === 0 && this.second === 0) {
      clearInterval(this.interval);
      alert("Time down");
    }
    htmlElements.timerMin.innerText =
      this.minute < 10 ? `0${this.minute}` : this.minute;
    htmlElements.timerSec.innerText =
      this.second < 10 ? `0${this.second}` : this.second;
    htmlElements.timerHour.innerText =
      this.hour < 10 ? `0${this.hour}` : this.hour;
  }

  startTimer() {
    if (this.interval === null) {
      let render = this.render.bind(this);
      render();
      this.interval = setInterval(function () {
        render();
      }, 1000);
    }
  }

  stopTimer() {
    clearInterval(this.interval);
    this.interval = null;
  }

  resetTimer() {
    clearInterval(this.interval);
    this.interval = null;
    this.hour = 0;
    this.minute = 5;
    this.second = 0;
    this.showTimer();
  }
}
