"use strict";
// interface Student1 {
//     [index:string]: string | number | undefined
//     name: string,
//     gender?: number,
// }
const car = {
    make: 'Isuzu',
    model: 'canter',
    wheels: 4
};
for (const key in car) {
    console.log(`${key} -> ${car[key]}`);
}
Object.keys(car).map(key => console.log(`${key} ->> ${car[key]}`));
const logCarKeys = (car, key) => {
    console.log(`${key} > ${car[key]}`);
};
logCarKeys(car, 'model');
console.log('\n \n');
const totalIncome = {
    salary: 400,
    hustle: 'boutique',
    sidehustle: 'selling clothes'
};
for (const revenue in totalIncome) {
    console.log(`${revenue} -+> ${totalIncome[revenue]} `);
}
const dog = {
    paws: 'none',
    horns: 'absent',
    skin: 'smooth',
    move: 'does move'
};
for (const breed in dog) {
    console.log(`${breed} -> ${dog[breed]}`);
}
const Rectangle7 = {
    length: 3,
    width: 7
};
