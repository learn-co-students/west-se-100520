// Arrow functions

const foo = val => `${val} is the best cat`
console.log(foo('simon'))
function bar(val) {
    return `${val} is the best cat`
}
console.log(bar('miyuki'))

const boo = (str1, str2) => `Happy ${str1} to ${str2}`
console.log(boo("Halloween", "y'all"))

const doMath = (num1, num2) => {
    let sum = num1 + num2
    return sum
}
console.log(doMath(5, 3))

const addTwo = (foo, num) => {
    return foo(2, num)
}
console.log(addTwo(doMath, 7))

//Class
class Book {

    constructor(obj){
        this.title = obj.title,
        this.author = obj.author,
        this.fans = obj.fans
    }

    printTitle = () => console.log(this.title)

    printFans = () => {
        // console.log(this)
        // this.fans.forEach(function(fan){
        //     console.log(`${fan} likes ${this.title}`)
        // }.bind(this))
        this.fans.forEach((fan) => {
            console.log(`${fan} likes ${this.title}`)
        })
    }
}

class ColorBook extends Book {

    constructor(args){
        super(args)
        this.color = "blue"
    }
    isBlue = () => console.log(`${this.title} now has a ${this.color} cover`)
    printTitle = () => console.log(`Title: ${this.title}`)
}


fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(booksJson => booksJson.map(book => new Book(book)))
    .then(bookObjArr => {
        console.log(bookObjArr)
        bookObjArr.forEach(book => book.printFans())
    })

