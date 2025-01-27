class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
      this.intervalId = setInterval(() => {
        this.currentTime += 1
        if (printTimeCallback) {
          printTimeCallback()
        }
      }, 1000)
  }

  getMinutes() {
    
    return Math.floor(this.currentTime / 60) 
  }

  getSeconds() {
     return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let time2 = `${value}` 
    
    if (time2.length === 1){
      return `0${value}`
     } else {
      return `${value}` 
     } 
  }

  stop() {
    clearInterval (this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
      
  }
}
