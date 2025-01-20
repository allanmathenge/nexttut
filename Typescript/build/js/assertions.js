"use strict";
// Convert to a more specific or less specific type
let a = "Hello John";
let b = a; // less specific type
let c = a; // more specific type
// <Angle brackets>
let d = 'world';
let e = 'world'; //  Angle brackets cannot be used in .tsx files 
let f = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
console.log(myVal);
// Mistake since the value returned is a string
let nextVal = addOrConcat(4, 5, 'concat');
// console.log(nextVal)
// 10 as string
10;
// Assertions with DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img'); // using exclamation is known as non-null assertion
const nextImg = document.getElementById('#img');
// img.src
// myImg.src
// nextImg.src
