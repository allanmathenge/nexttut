
type one = string
type two = string | number
type three = 'Hello'

// Convert to a more specific or less specific type

let a: one = "Hello John"
let b = a as two // less specific type
let c = a as three // more specific type

// <Angle brackets>

let d = <one>'world'
let e = <one | number>'world' //  Angle brackets cannot be used in .tsx files 
let f = <number | string>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string
console.log(myVal)

// Mistake since the value returned is a string
let nextVal: number = addOrConcat(4, 5, 'concat') as number
// console.log(nextVal)

// 10 as string
(10 as unknown) as string

// Assertions with DOM

const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement // using exclamation is known as non-null assertion
const nextImg = <HTMLImageElement>document.getElementById('#img')

// img.src
// myImg.src
// nextImg.src



