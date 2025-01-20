"use strict";
let myName = "Allan Mathenge";
const sum = (a, b) => {
    return a + b;
};
// console.log(sum(2, ""))
let re = /\w+/;
// ARRAYS AND OBJECTS
// ARRAYS
let strArray = ['One', 'Four', 'Allan'];
let guitars = ['strat', 'Les Paul', 5251];
let mixedData = ['Hello', 9820, true];
strArray[0] = "Jojo";
strArray.push('hello');
guitars[0] = 234; // ts does not have problems shifting the order of the data in the array
guitars.unshift(5); // Add the string to the beginning
guitars = strArray; // cannot work the other way. guitars has a string data type.
mixedData = guitars;
let test = []; // Takes any data type
let bands = []; // takes only string data type
bands.push("hi");
let myTuple = ['Allan', 23, true];
let mixed = ['hello', 3, false];
mixed = myTuple;
// OBJECTS
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = mixed;
myObj = {};
const exampleObj = {
    prop1: "Hello",
    prop2: false
};
exampleObj.prop1 = "";
exampleObj.prop2 = true;
let evh = {
    name: "Allan",
    active: true,
    albums: ["Sing a song", 3, 90]
};
let jp = {
    active: false,
    albums: [3, "Hello stranger"]
};
evh = jp;
// How to make properties optional - The object can exist without the optional property specified in the types
const greetGuitarist = (guitarist) => {
    var _a;
    return `The guitarist name ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()} when you see him`;
};
console.log(greetGuitarist(jp));
// When to use type and interface?
// Used when we want to use a method like a class
// NARROWING
const helloGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `the guitarist name ${guitarist.name.toUpperCase()} says Hi`;
    }
    return "Hi";
};
console.log(helloGuitarist(jp));
// ENUMS
// Unlike most ts features, Enums are not a type-level addition to js but something added to the language and runtime
var Grade;
(function (Grade) {
    Grade[Grade["U"] = -1] = "U";
    Grade[Grade["D"] = 0] = "D";
    Grade[Grade["C"] = 1] = "C";
    Grade[Grade["B"] = 2] = "B";
    Grade[Grade["A"] = 3] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(Grade.D);
console.log(Grade.B);
console.log(Grade.A);
