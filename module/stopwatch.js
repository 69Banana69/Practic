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
    document.querySelector(".millisecond").innerText =
      this.millisecond < 9 ? `0${this.millisecond}` : this.millisecond;
    if (this.millisecond > 99) {
      this.second++;
      document.querySelector(".second").innerText = `0${this.second}`;
      this.millisecond = 0;
      document.querySelector(".millisecond").innerText = `0${this.millisecond}`;
    }
    document.querySelector(".second").innerText =
      this.second < 10 ? `0${this.second}` : this.second;
    //second
    if (this.second > 59) {
      this.minute++;
      document.querySelector(".minute").innerText = `0${this.minute}`;
      this.second = 0;
      document.querySelector(".second").innerText = `0${this.second}`;
    }
    document.querySelector(".minute").innerText =
      this.minute < 10 ? `0${this.minute}` : this.minute;
    //hour
    if (this.minute > 59) {
      this.hour++;
      document.querySelector(".hour").innerText = `0${this.hour}`;
      this.minute = 0;
      document.querySelector(".minute").innerText = `0${this.minute}`;
    }
    document.querySelector(".hour").innerText =
      this.hour < 10 ? `0${this.hour}` : this.hour;
  }

  startStopwatch() {
    let render = this.render.bind(this);
    render();
    this.interval = setInterval(function () {
      render();
    }, 10);
  }

  pauseStopwatch() {
    clearInterval(this.interval);
  }
  resetStopwatch() {
    clearInterval(this.interval);
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.millisecond = 0;
    document.querySelector(".hour").innerText = "00";
    document.querySelector(".minute").innerText = "00";
    document.querySelector(".second").innerText = "00";
    document.querySelector(".millisecond").innerText = "00";
  }
}
