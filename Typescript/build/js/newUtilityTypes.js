"use strict";
//////////////////// UTILITY TYPES \\\\\\\\\\\\\\\\\\\\\\
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'E37/84177',
    title: 'Final project',
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 49 }));
const assignedGrade = updateAssignment(assign1, { grade: 89 });
////////////// Required and Readonly \\\\\\\\\\\\\\\\\\\\
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignedGrade), { verified: true });
// assignVerified.grade = 0 -> Readonly utility prop cannot be reassigned
recordAssignment(Object.assign(Object.assign({}, assignedGrade), { verified: true }));
// Record utility type
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrades = {
    Sara: "B",
    James: "U"
};
const gradeData = {
    Sara: { assign1: 90, assign2: 98 },
    James: { assign1: 80, assign2: 13 },
};
const score = {
    studentId: "E37/2017",
    grade: 99
};
const preview = {
    studentId: "E883",
    title: "Final Project"
};
const newAdjustedGrade = {
    Sara: "A",
    James: "B"
};
//  type newAssign = { title: string, points: number }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility types", 199);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(user => console.log(user));
