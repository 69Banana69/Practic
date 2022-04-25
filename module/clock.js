//Не знаю как сделать вывод часов в main.js

import { htmlElements } from "../main.js";

export default function Clock(){
  this.timer = null;

}

Clock.prototype.render = function() {
    const date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = `0${hours}`;
  
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;
  
    let seconds = date.getSeconds();
    if (seconds < 10) seconds = `0${seconds}`;

    document.querySelector('.getclock').innerText = `${hours}:${minutes}:${seconds}`

  }

  Clock.prototype.startClock = function(){
    let render = this.render.bind(this);
    render();
    this.timer = setInterval(function () {
      render()}, 1000)
   
  }



  
  