console.log('hi')
// destructuring
const spaceship = {
    captain: 'Jean-Luc Picard',
    firstOfficer: 'William Riker',
    chiefEngineer: 'Gordi La Forge',
    redShirts: {
        one: 'tom',
        two: 'bill',
        three: 'ann'
    }
}

const {captain, firstOfficer, redShirts, dogs} = spaceship
console.log(captain)
const {one,two,three} = redShirts
console.log(one)
console.log(spaceship.captain, spaceship.firstOfficer, spaceship.chiefEngineer)

class Spaceship{
    constructor(props){
        this.captain = props.captain,
        this.firstOfficer = props.firstOfficer,
        this.chiefEngineer = props.chiefEngineer
    }
}

class Spaceship2{
    constructor({captain, chiefEngineer, firstOfficer, dog}){
        this.captain = captain
        this.firstOfficer = firstOfficer
        this.chiefEngineer = chiefEngineer
        this.dog = dog
    }
}

console.log(new Spaceship2(spaceship))






// key value assignment shortcut

const pizza = 'pepperoni'
const foodEatNow = 'Pizza Hut'

const pizzaObj = {
    pizza: pizza,
    restaurant: foodEatNow
}
console.log(pizzaObj)

const pizza2 = {pizza, restaurant: foodEatNow}
console.log(pizza2)

// ES6 Spread Operator

let arr1 =[1,2,3,4]
let arr2 = [ 'cat', ...arr1, 'dog']
// arr2.push(5)

console.log(arr1)
console.log(arr2)

let obj1 = {
    name: 'Rose',
    role: 'goblin',
    napTimes: {
        one: false,
        two: true,
        three: true
    }
}
let role = 'goblin monster'

let obj2 = {...obj1, food:'plants', role}
//  obj2.role = 'goblin monster'
console.log(obj1)
console.log(obj2)




//all the forms of arrow functions
let cats = ['rose', 'tom', 'bubbles','tony']

const implicitReturn = () => 'hi'
console.log(implicitReturn())
const explicitReturn = () => {
    return 'hello'
}
console.log(explicitReturn())

const oneParam = name => `hi my name is ${name}`

console.log(oneParam('rose'))

//passing functions around as arguments (callbacks) and ES6 Iterators (map, reduce, forEach, filter, find, etc)
const print = (item) => console.log(item)
cats.forEach(cat => print(cat))
const isRose = (cat) =>  cat == 'rose'
cats.filter(cat => isRose(cat))

// div.addEventListener('click', print)


//function binding vs arrow functions

class Animal{
    constructor(name, faveSnack){
        this.name = name
        this.faveSnack = faveSnack
    }
    speak(){
        console.log(`hi my name is ${this.name}`)
    }
    listFavSnacks = () => {
        this.faveSnack.forEach(snack => {
            console.log(`${this.name} loves ${snack}`)
        })
    }
}

const a1 = new Animal('tom', ['cookies', 'cake', 'pizza'])
const a2 = new Animal('bubbles', ['ice cream', 'pizza'])

console.log(a1.listFavSnacks())
// console.log(a2.speak())



//class instance properties and class syntax in general

function Cat(name, faveSnack){
    this.name = name,
    this.faveSnack = faveSnack
}
c1 = new Cat('rose', 'house plants')
// console.log(c1)

Cat.prototype.speak = function(){
    console.log('mow')
}
// console.log(c1.speak())


//dynamic object keys
function dynamicSetKey(obj, key, val){
    obj[key] = val
    return obj
}
console.log(dynamicSetKey({},'cat', 'rose'))

let map = {}
cats.forEach(cat => {
    map[cat] = true
})
console.log(map)