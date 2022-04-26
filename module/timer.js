import { htmlElements } from "../main.js";
//TODO Add valid
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


    if (
      (this.hour && this.minute && this.second) === 0 ||
      (this.hour && this.minute && this.second) === "0"
    ) {
      clearInterval(this.interval);
      htmlElements.timerOver.classList.remove("hidden");
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
      htmlElements.timerOver.classList.add("hidden");
    }
  }

  stopTimer() {
    clearInterval(this.interval);
    this.interval = null;
    htmlElements.timerOver.classList.add("hidden");
  }

  resetTimer() {
    clearInterval(this.interval);
    this.interval = null;
    this.hour = 0;
    this.minute = 5;
    this.second = 0;
    this.showTimer();
    htmlElements.timerOver.classList.add("hidden");
  }
}
