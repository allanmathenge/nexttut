"use strict";
////////////////////// Index Sigmatures and Key of Assertions \\\\\\\\\\\\\\\\\\\\\\
// index signature
// interface TransactionsObj {
//     [index:string]: number
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Allan: 0
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
console.log(todaysTransactions['Allan']);
const student = {
    name: 'George',
    GPA: 3.4,
    classes: [100, 400]
};
// console.log(student.test)
// for ( const key in student) {
//     console.log(`${key}: ${student[key]}`)
// }
///////// How to loop through an object that has no Signature Index provided \\\\\\\\\\\\\\\\\\\\\
///////////////// keyof keyword and an assertion \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////// keyof creates a union type; of specific name literal \\\\\\\\\\\\\\\
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(`${key}: ${student[key]}`);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
console.log('');
for (const revenue in monthlyIncomes) {
    console.log(`${revenue} -> ${monthlyIncomes[revenue]}`);
}
