import { htmlElements } from "../main.js"

setInterval(getClock, 1000)
function getClock() {
    const date = new Date();
  
    let hours = date.getHours();
    if (hours < 10) hours = `0${hours}`;
  
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;
  
    let seconds = date.getSeconds();
    if (seconds < 10) seconds = `0${seconds}`;
  
    htmlElements.clock.textContent = `${hours}:${minutes}:${seconds}`;
  }

  export default getClock