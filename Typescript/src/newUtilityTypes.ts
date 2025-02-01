
//////////////////// UTILITY TYPES \\\\\\\\\\\\\\\\\\\\\\

// Partial Assignment

interface Assignment {
    studentId: string
    title: string
    grade: number
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: 'E37/84177',
    title: 'Final project',
    grade: 0
}

console.log(updateAssignment(assign1, {grade: 49}))
const assignedGrade: Assignment = updateAssignment(assign1, {grade: 89})

////////////// Required and Readonly \\\\\\\\\\\\\\\\\\\\

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign
}

const assignVerified: Readonly <Assignment> = {
    ...assignedGrade, verified: true
}

// assignVerified.grade = 0 -> Readonly utility prop cannot be reassigned
recordAssignment({ ...assignedGrade, verified: true })

// Record utility type

const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
}

type Students = "Sara" | "James"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    James: "U"
}

interface Grades {
    assign1: number
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 90, assign2: 98},
    James: { assign1: 80, assign2: 13},
}

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "E37/2017",
    grade: 99
}

type AssignPreview = Omit<Assignment, "grade" | "verified">
const preview: AssignPreview = {
    studentId: "E883",
    title: "Final Project"
}

// Exclude and Extract - work with string literal union types

type adjustGrade = Exclude<LetterGrades, "U">
type highGrades = Extract<LetterGrades, "A" | "B">

const newAdjustedGrade: Record<Students, highGrades> = {
    Sara: "A",
    James: "B"
}

// Nonnullable

type AllPossibleGrades = "Dave" | "John" | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades> // excludes null and undefined values

//  type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>
const tsAssign: NewAssign = createNewAssign("Utility types", 199)
console.log(tsAssign)

// Parameters utility Type - we derive the type from the parameters of the function

type AssignParams = Parameters<typeof createNewAssign>
const assignArgs: AssignParams = ["Generics", 100]
const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited utility type - helps us with ReturnType of a promise

interface User {
    id: number
    name: string
    username: string
    email: string
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then( res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type fetchUserReturnType = Awaited<ReturnType<typeof fetchUsers>>
fetchUsers().then(user => console.log(user))
