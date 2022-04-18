// setInterval(onIntervalNextTick, 1000);

const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');



function getClock() {
  setInterval(getClock, 1000);
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;

  htmlElements.output.textContent = `${hours}:${minutes}:${seconds}`

}

    htmlElements.stopwatch.addEventListener('click', function () {
        this.classList.add('selected')
        htmlElements.clock.classList.remove('selected')
        htmlElements.timer.classList.remove('selected')
    })

    htmlElements.clock.addEventListener('click', function () {
        this.classList.add('selected')
        htmlElements.stopwatch.classList.remove('selected')
        htmlElements.timer.classList.remove('selected')
    })

    htmlElements.timer.addEventListener('click', function () {
        this.classList.add('selected')
        htmlElements.clock.classList.remove('selected')
        htmlElements.stopwatch.classList.remove('selected')
    })
