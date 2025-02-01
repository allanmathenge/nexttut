"use strict";
////////// Utility types \\\\\\\\\\\\\\\\\
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const hexColor = {
    "red": "FF0000",
    "green": "00FF00",
    "blue": "0000FF"
};
const finalExamGrades = {
    Sara: 'A',
    Jane: 'C',
    Paige: 'D',
    Susan: 'B',
};
const gradeData5 = {
    Sara: { assign1: 89, assign2: 70 },
    Jane: { assign1: 45, assign2: 78 },
    Paige: { assign1: 67, assign2: 35 },
    Susan: { assign1: 80, assign2: 60 }
};
const mathsChemScores = {
    maths: 99,
    chem: 78
};
const omittedMathsChem = {
    kiswahili: 89,
    english: 9
};
const createNewAssign1 = (name, shoeSize) => {
    return { name, shoeSize };
};
const child = createNewAssign1("Jimmy", 13);
const studentScores = (name, marks) => {
    return { name, marks };
};
const mathsGrade = ["Suzzy", 80];
console.log(mathsGrade);
const fetchUsers1 = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err);
    });
    return data;
});
fetchUsers1().then(user => console.log(user));
