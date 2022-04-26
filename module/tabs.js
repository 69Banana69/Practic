function Tab(mode) {
    this.mode = mode;
}

Tab.prototype.changeTab = function (tab) {
    this.mode = tab;
}

Tab.prototype.updateClock = function (htmlElements) {
    switch (this.mode) {
        case 'stopwatch': {
            htmlElements.getstopwatch.classList.remove('hidden')
            htmlElements.clock.classList.add('hidden')
            htmlElements.getTimer.classList.add('hidden')


            break
        }
        case 'clock': {
            htmlElements.clock.classList.remove('hidden')
            htmlElements.getstopwatch.classList.add('hidden')
            htmlElements.getTimer.classList.add('hidden')
            break
        }
        case 'timer': {
            htmlElements.getTimer.classList.remove('hidden')
            htmlElements.getstopwatch.classList.add('hidden')
            htmlElements.clock.classList.add('hidden')
            
            break
        }
    }
}
export default Tab
    
    
