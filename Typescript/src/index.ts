////////////////////// Index Sigmatures and Key of Assertions \\\\\\\\\\\\\\\\\\\\\\

///////////////////// Index Signatures - when you create objects but you do not know the exact names of object keys \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

interface TransactionsObj {
    [index:string]: number // allows objects to be added created with that interface
    Pizza: number,
    Books: number,
    Job: number,
}

// index signature
// interface TransactionsObj {
//     [index:string]: number
// }

const todaysTransactions: TransactionsObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Allan: 0
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions["Pizza"])

let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionsObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]
    }

    return total
}

console.log(todaysNet(todaysTransactions))
console.log(todaysTransactions['Allan'])

////////// another example\\\\\\\\\

interface Student {
    // [key:string]: string | number | number[] | undefined
    name: string
    GPA: number
    classes?: number[]
}

const student: Student = {
    name: 'George',
    GPA: 3.4,
    classes: [100, 400]
}

// console.log(student.test)

// for ( const key in student) {
//     console.log(`${key}: ${student[key]}`)
// }

///////// How to loop through an object that has no Signature Index provided \\\\\\\\\\\\\\\\\\\\\
///////////////// keyof keyword and an assertion \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////// keyof creates a union type; of specific name literal \\\\\\\\\\\\\\\

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map( key => {
    console.log(`${key}: ${student[key as keyof typeof student]}`)
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'name')

////////////////////////////////////////////////

// interface Incomes {
//     [key:string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'
type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

console.log('')

for (const revenue in monthlyIncomes) {
    console.log(`${revenue} -> ${monthlyIncomes[revenue as keyof Incomes]}`)
}



