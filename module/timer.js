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
    let hValue = prompt("Enter the hours:");
    if (
      isNaN(Number(hValue)) ||
      hValue < 0 ||
      hValue === null ||
      hValue === ""
    ) {
      alert("Error. The value is incorrect. Try it again.");
      this.resetTimer();
      return;
    } else {
      this.hour = hValue;
    }
    let mValue = prompt("Enter the minutes:");
    if (
      isNaN(Number(mValue)) ||
      mValue < 0 ||
      mValue === null ||
      mValue === ""
    ) {
      alert("Error. The value is incorrect. Try it again.");
      this.resetTimer();
      return;
    } else {
      this.minute = mValue;
    }
    let sValue = prompt("Enter the seconds:");
    if (
      isNaN(Number(sValue)) ||
      sValue < 0 ||
      sValue === null ||
      sValue === ""
    ) {
      alert("Error. The value is incorrect. Try it again.");
      this.resetTimer();
      return;
    } else {
      this.second = sValue;
    }

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

    if (this.hour == 0 && this.minute == 0 && this.second == 0) {
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
