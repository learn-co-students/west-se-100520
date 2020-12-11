//Destructuring 
let a, b
[a, , b] = [10, 20, 30]

// console.log(a)
// console.log(b)

let instructorA = {name: 'Lantz', role:'lead', age:100}
let instructorB = {name: 'Hal', role: 'coach', age: 23}

// let {name, role, age} = instructorB
// console.log(name)
// console.log(role)
// console.log(age)

//Spread ...
let c = 'a'
let d = c
d = 'z'
// console.log(c)
// console.log(d)

let arr1 = ['a', 'b', 'c']
// let arr2 = arr1
// arr2.push('d')
// let arr3 = Object.assign([], arr1)
let arr2 = [...arr1, 'd']
// arr3.push('f')

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

let instructorC = {...instructorB, favColor: 'purple'}
// console.log(instructorC)
// console.log(instructorB)
instructorC = {...instructorC, name:"Emiley"}
// console.log(instructorC)

//Exercise

let colors = ['red', 'blue', 'green']
let colors2 = [...colors, 'purple']
console.log(colors2)

let cat = {name: "Simon", age: 7}
cat = {...cat, age: cat.age+1}
cat = {...cat, color: 'tabby'}
console.log(cat)


let {name, age, color} = cat
console.log(name)
console.log(age)
console.log(color)