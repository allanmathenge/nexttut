////////// Utility types \\\\\\\\\\\\\\\\\

const hexColor: Record<string, string> = {
    "red": "FF0000",
    "green": "00FF00",
    "blue": "0000FF"
}

type Students5 = "Sara" | "Jane" | "Paige" | "Susan"
type examGrades = "A" | "B" | "C" | "D" | "F"

const finalExamGrades: Record<Students5, examGrades> = {
    Sara : 'A',
    Jane: 'C',
    Paige: 'D',
    Susan: 'B',
}

interface Grades5 {
    assign1: number,
    assign2: number,
}

const gradeData5: Record<Students5, Grades5> = {
    Sara: { assign1: 89, assign2: 70},
    Jane: { assign1: 45, assign2: 78},
    Paige: { assign1: 67, assign2: 35},
    Susan: { assign1: 80, assign2: 60}
}

interface Subjects {
    maths: number
    chem: number
    kiswahili: number
    english: number
}

type MathsChem = Pick<Subjects, "maths" | "chem">
const mathsChemScores: MathsChem = {
    maths: 99,
    chem: 78
}

type OmitMathChem = Omit<Subjects, "maths" | "chem">
const omittedMathsChem: Readonly <OmitMathChem> = {
    kiswahili: 89,
    english: 9
}

type PossibleGrades = "A" | "D" | null | undefined
type Grades3 = NonNullable<PossibleGrades>

const createNewAssign1 = (name: string, shoeSize: number) => {
    return { name, shoeSize }
}

type Person1 = ReturnType<typeof createNewAssign1>
const child: Person1 = createNewAssign1("Jimmy", 13)

const studentScores = (name: string, marks: number) => {
    return { name, marks }
}

type Maths = Parameters<typeof studentScores>
const mathsGrade: Maths = ["Suzzy", 80]
console.log(mathsGrade)

interface Users {
    id: number
    name: string
    username: string
    email: string
}

const fetchUsers1 = async (): Promise<Users[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then( res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err)
    })
    return data
}

type Fetchusers1 = Awaited<ReturnType<typeof fetchUsers1>>
fetchUsers1().then(user => console.log(user))
