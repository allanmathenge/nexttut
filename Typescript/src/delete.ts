
// interface Student1 {
//     [index:string]: string | number | undefined
//     name: string,
//     gender?: number,
// }

// const student1: Student1 = {
//     location: undefined,
//     hobby: 'Swimming',
//     name: 'Greg',
//     gender: undefined
// }

interface Vehicle {
    make: string
    model: string
    wheels: number
}

const car: Vehicle = {
    make: 'Isuzu',
    model: 'canter',
    wheels: 4
}

for (const key in car) {
    console.log(`${key} -> ${car[key as keyof Vehicle]}`)
}

Object.keys(car).map(key => console.log(`${key} ->> ${car[key as keyof Vehicle]}`))

const logCarKeys = (car: Vehicle, key: keyof Vehicle) => {
    console.log(`${key} > ${car[key]}`)
}
logCarKeys(car, 'model')

console.log('\n \n')

// Another way of assigning index signatures 

type Incomes1 = 'salary' | 'hustle' | 'sidehustle'
type MonthlyIncomes1 = Record<Incomes1, number | string>

const totalIncome: MonthlyIncomes1 = {
    salary: 400,
    hustle: 'boutique',
    sidehustle: 'selling clothes'
}

for(const revenue in totalIncome) {
    console.log(`${revenue} -+> ${totalIncome[revenue as keyof MonthlyIncomes1]} `)
}

interface Animal5 {
    [key:string]: string
    horns: string
    skin: string
    move: string
}

const dog: Animal5 = {
    paws: 'none',
    horns: 'absent',
    skin: 'smooth',
    move: 'does move'
}

for (const breed in dog) {
    console.log(`${breed} -> ${dog[breed]}`)
}

interface Shape7 {
    length: number
    width: number
}

const Rectangle7: Shape7 = {
    length: 3,
    width: 7
}
