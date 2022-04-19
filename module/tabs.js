import { htmlElements } from "../main.js"


function tabs () {
    htmlElements.links.forEach(link => link.classList.remove('selected'))
    this.classList.add('selected')
    let mode = this.getAttribute('data-mode')
        
    if (mode === 'stopwatch') {
        htmlElements.getstopwatch.classList.remove('hidden')
        htmlElements.clock.classList.add('hidden')
    }
    if (mode === 'clock') {
        htmlElements.clock.classList.remove('hidden')
        htmlElements.getstopwatch.classList.add('hidden')
    }
    if (mode == 'timer') {
        htmlElements.getstopwatch.classList.add('hidden')
        htmlElements.clock.classList.add('hidden')
    }

    
    
  }

  export default tabs