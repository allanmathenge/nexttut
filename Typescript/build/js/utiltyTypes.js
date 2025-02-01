"use strict";
///////////////////// Utility Types - helpful for cmon transformations \\\\\\\\\\\\\\\\\\\\\
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'e37/84177',
    title: 'Final Project',
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 97 }));
// Required and ReadOnly --> Requires all the properties including the optional properties
const assignedGrade = updateAssignment(assign1, { grade: 95 });
const recordAssinment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignedGrade), { verified: true });
// assignVerified.grade = 32
// recordAssinment(assignedGrade)
recordAssinment(Object.assign(Object.assign({}, assignedGrade), { verified: false }));
