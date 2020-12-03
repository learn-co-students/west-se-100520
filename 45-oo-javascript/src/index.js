// object literals
// const character = {}
// const character = new Object

// factory function
function createCharacter(speed) {
    const character = {}
    character.element = document.createElement('img')

    character.speed = speed
    character.assets = 'assets/character'
    character.element.src = `${character.assets}/static.gif`
    character.element.style.position = 'relative'
    character.element.style.left = '0px'
    character.element.style.top = '0px'
    character.element.style.width = '25px'
    document.body.appendChild(character.element)

    // let movement
    // character.movement = null

    character.walkEast = function() {
        character.stop()
        character.movement = setInterval(function() {
          let currentPosition = parseInt(character.element.style.left)
          character.element.style.left = currentPosition + 1 + 'px'
        }, character.speed)
        character.element.src = `${character.assets}/walkright.gif`
      }

      character.walkWest = function() {
        character.stop()
        character.movement = setInterval(function() {
          let currentPosition = parseInt(character.element.style.left)
          character.element.style.left = currentPosition - 1 + 'px'
        }, character.speed)
        character.element.src = `${character.assets}/walkleft.gif`
      }
      
      character.walkNorth = function() {
        character.stop()
        character.movement = setInterval(function() {
          let currentPosition = parseInt(character.element.style.top)
          character.element.style.top = currentPosition - 1 + 'px'
        }, character.speed)
        character.element.src = `${character.assets}/walkup.gif`
      }
      
      character.walkSouth = function() {
        character.stop()
        character.movement = setInterval(function() {
          let currentPosition = parseInt(character.element.style.top)
          character.element.style.top = currentPosition + 1 + 'px'
        }, character.speed)
        character.element.src = `${character.assets}/walkdown.gif`
      }
      
      character.stop = function() {
        clearInterval(character.movement)
        character.element.src = `${character.assets}/static.gif`
      }

    return character
}

// Object.create

// constructor function MUST BE CALLED WITH NEW KEYWORD

function Character() {
    this.element = document.createElement('img')

    this.speed = 15
    this.assets = 'assets/character'
    this.element.src = `${this.assets}/static.gif`
    this.element.style.position = 'relative'
    this.element.style.left = '0px'
    this.element.style.top = '0px'
    this.element.style.width = '25px'
    document.body.appendChild(this.element)
}

Character.prototype.walkEast = function() {
    this.stop()
    console.log("Outside interval", this)
    this.movement = setInterval(() => {
        console.log("Inside interval", this)
      let currentPosition = parseInt(this.element.style.left)
      this.element.style.left = currentPosition + 1 + 'px'
    }, this.speed)
    this.element.src = `${this.assets}/walkright.gif`
  }

     Character.prototype.walkWest = function() {
        this.stop()
        this.movement = setInterval(function() {
          let currentPosition = parseInt(this.element.style.left)
          this.element.style.left = currentPosition - 1 + 'px'
        }, this.speed)
        this.element.src = `${this.assets}/walkleft.gif`
      }
      
      Character.prototype.walkNorth = function() {
        this.stop()
        this.movement = setInterval(function() {
          let currentPosition = parseInt(this.element.style.top)
          this.element.style.top = currentPosition - 1 + 'px'
        }, this.speed)
        this.element.src = `${this.assets}/walkup.gif`
      }
      
      Character.prototype.walkSouth = function() {
        this.stop()
        this.movement = setInterval(function() {
          let currentPosition = parseInt(this.element.style.top)
          this.element.style.top = currentPosition + 1 + 'px'
        }, this.speed)
        this.element.src = `${this.assets}/walkdown.gif`
      }
      
      Character.prototype.stop = function() {
        clearInterval(this.movement)
        this.element.src = `${this.assets}/static.gif`
      }