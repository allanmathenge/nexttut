
// Type Aliases

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

interface Guitarist {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type userId = stringOrNumber

// Literal Types

let mySurname: 'Allan'
let myUsername: "Allan" | "Mathenge" | "Dev"
myUsername = "Allan"


// FUNCTIONS

function add(a: number, b: number): number {
    return a + b
}

// Functions that do not have a return: void

const logMsg = (message: any) => {
    console.log(message)
    return 
}

logMsg("Hello")
logMsg(add(2, 4))
// logMsg(add('a', 4))

let subtract = function (c: number, d: number): number {
    return c - d
}

console.log(subtract(4, 2))

type mathFunction = (a: number, b: number) => number 
// interface mathFunction {
//     (a: number, b: number): number
// }

let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(2, 2))

// optional parameters

const addAll = (a: number, b: number, c?: number): number => {
    // Also optional parameters have to the last on the list
    
    // type guard
    if (typeof c !== "undefined") {
        return a + b + c
    }
    return a + b
}

// Default value
const sumAll = (a: number, b: number, c: number = 2 ): number => {
    // Also optional parameters have to the last on the list
    return a + b + c
}

const total = (a:number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 2, 3, 4, 5))

// Never type of function - explicitly for functions that throw error
// Also if it has an infinite loop or endless loop inside
function createError(errMsg: string) {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// Custom type guard

const isNumber = (value: any): boolean => {
    return typeof value === 'number'
    ? true : false
}

const numberOrString = (value: string | number) => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('It should never happen')
}



