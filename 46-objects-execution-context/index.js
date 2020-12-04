this.name = 'window object'
//Creating Objects
let space = {}
let ship = new Object
//Assigning and accessing properties
let cat = {
    name: "Simon",
    neutered: true
}
space.cool = true
space.system = "Sol"
space.planets = ["Earth", "Venus", "Mars"]
space.planets.push("Mercury")
space.planets = ["Jupiter", ...space.planets, "Uranus"]
space.darkness = {
    level: 1000,
    scary: true
}
console.log(space["darkness"]["level"])
console.log(space.darkness.scary)
//Copying an object
let space2 = space
space2.system = "Altaris"
// console.log(space.system)
let space3 = {
    ...space
}
space3.system = "Alpha Centauri"
console.log(space.system)
console.log(space3.system)
console.log(space3.darkness.level)
// deep clone
let space4 = JSON.parse(JSON.stringify(space))
space.darkness.level = 3000
console.log(space4.darkness.level)
// shallow clone with Object.assign()
let space5 = Object.assign({}, space)

//Using variables as keys
let beef = "steak"
let obj = {
    [beef]: "yum",
    beef: "not what i wanted"
}

//Arrays and functions are objects
let array = ["a", "b", "c"]
let obj2 = {...array}
console.log(obj2)

//Fn assignment to obj property
let person = {
    name: "Walt",
    occupation: "delivery driver"
}

function sayGreeting(name, greeting){
    return name + " says " + greeting
}
person.greet = sayGreeting
console.log(person.greet(person.name, "hey"))

//Objects create their own context
function sayThis() {
    console.log(this)
}
sayThis()
person.whatIsThis = sayThis

/************ Function Called with New Keyword ***********/
//inside a constructor fn, this will be the newly created object
function Person(name, favColor){
    this.name = name
    this.favColor = favColor
}

const andy = new Person('andy', 'blue') // constructor invocation pattern
console.log(andy)
console.log(typeof andy)
/********************************************************/

/************ Bind Call Apply ****************************/
const personOne = {name: 'andy'}
const personTwo = {name: 'annie'}
const personThree = {name: 'pat'}

function sayName(location, time){
    return `${this.name} says hello from ${location} at ${time}`
}
console.log(sayName('Houston', 'night'))
console.log(sayName.call(personOne, 'Paris', 'midnight'))
console.log(sayName.apply(personTwo, ['Taipei', 'dawn']))

const boundPersonThree = sayName.bind(personThree)
console.log(boundPersonThree('New York', '3:30'))

/********************************************************/

/************ Function called on an Object ***************/
function contextOfThis() {
    return this
}
const dog = {
    name: 'snoopy',
    whatsThis: contextOfThis
}
console.log(dog.whatsThis())
console.log(contextOfThis())
/********************************************************/

/************ Simple Function Call ***********************/
// function sayThis() {
//     console.log(this)
// }
// sayThis()
// person.whatIsThis = sayThis
/********************************************************/

/************ Arrow Functions ****************************/
// single-line implicit returns
let funky = () => console.log("hey")
let greet = greeting => console.log(greeting)
let multiply = (num1, num2) => num1 * num2

// multi-line implicit return
let divideByThree = num => (
    num * 3,
    num / 3
)

let multi = num => {
    let n = num * 5
    return `Your new number is ${n}`
}

let alex = {
    fullName: "Alex Griffith",
    sayGreeting: function(greeting) {
      console.log(this)
      return `${this.fullName} says: ${greeting}`
    },
    sayGreetingArrow: greeting => {
      console.log(this)
      return `${this.fullName} says: ${greeting}`
    }
  }
  alex.sayGreeting("Hey") //=> Logs alex object, returns "Alex Griffith says: Hey"
  
  alex.sayGreetingArrow("Hey") //=> Logs Window object, returns "undefined says: Hey"
  
// leverage lexical scoping of this 

const rabbit = {
    name: "Mimi",
    favSnacks: ['cabbage', 'carrots', 'tuna'],
    eatSnacks: function() {
        this.favSnacks.forEach((snack) => {
            console.log(`${this.name} is eating ${snack}`)
        })
    }
}

/********************************************************/

this.character = "Daisy";

const game = {
  character: "Mario",
  details: {
    character: "Yoshi",
    characterName: function() {
      return this.character;
    },
    arrowCharacterName: () => this.character
  }
};

console.log(game.details.characterName)
console.log(game.details.characterName()) // method invocation pattern
const characterName = game.details.characterName // function invocation pattern
console.log(characterName())
console.log(game.details.arrowCharacterName())
console.log(game.details.characterName.call(game)) // call/apply invocation pattern
console.log(game.details.arrowCharacterName.call(game.details))