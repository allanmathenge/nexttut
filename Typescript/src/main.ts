let myName = "Allan Mathenge"

const sum = (a: number, b: string) => {
    return a + b
}

// console.log(sum(2, ""))

let re: RegExp = /\w+/

// ARRAYS AND OBJECTS

// ARRAYS

let strArray = ['One', 'Four', 'Allan']
let guitars = ['strat', 'Les Paul', 5251]
let mixedData = ['Hello', 9820, true]

strArray[0] = "Jojo"
strArray.push('hello')

guitars[0] = 234 // ts does not have problems shifting the order of the data in the array
guitars.unshift(5) // Add the string to the beginning

guitars = strArray // cannot work the other way. guitars has a string data type.
mixedData = guitars

let test = [] // Takes any data type
let bands: string[] = [] // takes only string data type
bands.push("hi")

let myTuple: [string, number, boolean] = ['Allan', 23, true]
let mixed: (string | number | boolean)[] = ['hello', 3, false]

mixed = myTuple

// OBJECTS

let myObj: Object
myObj = []
console.log(typeof myObj)

myObj = mixed
myObj = {}

const exampleObj = {
    prop1: "Hello",
    prop2: false
}

exampleObj.prop1 = ""
exampleObj.prop2 = true

// type Guitarist = {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[]
// }

interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Allan",
    active: true,
    albums: ["Sing a song", 3, 90]
}

let jp: Guitarist = {
    
    active: false,
    albums: [3, "Hello stranger"]
}

evh = jp

// How to make properties optional - The object can exist without the optional property specified in the types

const greetGuitarist = (guitarist: Guitarist) => {
    return `The guitarist name ${guitarist.name?.toUpperCase()} when you see him`
}

console.log(greetGuitarist(jp))

// When to use type and interface?
// Used when we want to use a method like a class

// NARROWING
const helloGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `the guitarist name ${guitarist.name.toUpperCase()} says Hi`
    }
    return "Hi"
}

console.log(helloGuitarist(jp))

// ENUMS
// Unlike most ts features, Enums are not a type-level addition to js but something added to the language and runtime

enum Grade {
    U=-1,
    D,
    C,
    B,
    A
}

console.log(Grade.U)
console.log(Grade.D)
console.log(Grade.B)
console.log(Grade.A)


