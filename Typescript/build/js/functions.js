"use strict";
// Type Aliases
// Literal Types
let mySurname;
let myUsername;
myUsername = "Allan";
// FUNCTIONS
function add(a, b) {
    return a + b;
}
// Functions that do not have a return: void
const logMsg = (message) => {
    console.log(message);
    return;
};
logMsg("Hello");
logMsg(add(2, 4));
// logMsg(add('a', 4))
let subtract = function (c, d) {
    return c - d;
};
console.log(subtract(4, 2));
// interface mathFunction {
//     (a: number, b: number): number
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters
const addAll = (a, b, c) => {
    // Also optional parameters have to the last on the list
    // type guard
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// Default value
const sumAll = (a, b, c = 2) => {
    // Also optional parameters have to the last on the list
    return a + b + c;
};
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3, 4, 5));
// Never type of function - explicitly for functions that throw error
// Also if it has an infinite loop or endless loop inside
function createError(errMsg) {
    throw new Error(errMsg);
}
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// Custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('It should never happen');
};
