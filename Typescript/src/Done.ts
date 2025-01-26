
interface Musicianx {
    name:string
    instrument: string
    play(action:string): string
}

class Pianist implements Musicianx {
    name:string
    instrument: string

    constructor(name:string, instrument:string) {
        this.name = name
        this.instrument = instrument
    }
    play(action:string):string {
        return `${this.name} ${action} ${this.instrument}`
    }
}

const Adelle = new Pianist('Adelle', 'Vocals')
console.log(Adelle.play('sings'))

interface Player11 {
    name:string
    club: string
    plays(action:string):string
}

class Footballer implements Player11 {
    name:string
    club: string

    constructor(name:string, club:string) {
        this.name = name
        this.club = club
    }

    plays(action:string):string {
        return `${this.name} ${action} for ${this.club}`
    }
}

const Ronaldo = new Footballer("Ronaldo", 'Alhadri')
console.log(Ronaldo.plays("plays"))


// Classes

class Coder0 {
    constructor(
        public readonly name:string,
        private music: string,
        protected age:string,
        protected readonly lang: string = 'TypeScripts'
    ){
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.music} listerner`
    }
}

class AnotherCoder extends Coder0 {
    constructor(
        public computer:string,
        name: string,
        age:string,
        lang:string
    ) {
        super(name, age, lang)
        this.computer = computer
    }
    public getLang(action:string) {
        return `I ${action} ${this.lang}`
    }
}

const MyCode = new AnotherCoder('HP', 'Mathenge', '23', 'TS')
console.log(MyCode.getLang('write'))

// Another Classes example

class Code {
    constructor(
        public readonly lang: string,
        private name: string,
        protected duration: number
    ) {
        this.lang = lang
        this.name = name
        this.duration = duration
    }
    public getLang() {
        return `I am ${this.name} write ${this.lang}`
    }
}

class Name extends Code {
    constructor(
        public editor: string,
        lang:string,
        name:string,
        duration:number
    ) {
        super(lang, name, duration)
        this.editor = editor
    }

    public writeCode(action:string) {
        return `I have ${action} ${this.lang} using ${this.editor} for ${this.duration} years `
    }
}

const Myself = new Name('VS code', 'TS', 'Allan', 2)
console.log(Myself.writeCode('written'))


// ///////////////////////////////////////////////////////

class Peeps2 {
    static count: number = 0
    static getCount() {
        return Peeps2.count
    }

    public id: number
    constructor(public name:string) {
        this.name = name
        this.id = ++Peeps2.count
    }
}

const David = new Peeps2('David')
const James = new Peeps2('James')
const Thomas = new Peeps2('Thomas')

console.log(Peeps2.count)
console.log(David.id)
console.log(James.id)
console.log(Thomas.id)

class Bank {
    static balance:number = 1000
    static getBalance() {
        return Bank.balance
    }

    public sum: number

    constructor(public name:string) {
        this.sum = ++ Bank.balance
        this.name = name
    }
}

const MyBalance = new Bank('Allan')
const Sam = new Bank('Sam')
const Job = new Bank('Job')

console.log(MyBalance.sum)
console.log(Sam.sum)
console.log(Job.sum)


class Person {
    // properties and field
    name: string
    age: number

    constructor(name:string, age:number) {
        this.name = name
        this.age = age
    }

    // Method
    greet(greetins:string):string {
        return `${greetins}, my name is ${this.name} and I am ${this.age} years old.`
    }
}

const person1 = new Person('John', 20)
console.log(person1.greet('Hello'))

class Car {
    make: string
    model: string

    constructor(make:string, model:string) {
        this.make = make
        this.model = model
    }

    public drive(action:string) {
        return `Hello, I ${action} a ${this.model}`
    }
}
const car1 = new Car('Toyota', 'Corolla')
console.log(car1.drive('drive'))

////////////////////////// Access Modifiers - specify access levels for class members \\\\\\\\\\\\\\\\\\\\\\

class Employee {
    public name: string
    private salary: number

    constructor (name:string, salary:number) {
        this.name = name
        this.salary = salary
    }

    getSalary():string {
        return `Her salary is ${this.salary}`
    }
}

const employee1 = new Employee('Alice', 40000)
console.log(employee1.getSalary())

class Animal {
    name:string

    constructor(name:string) {
        this.name = name
    }
    speak(): void {
        console.log(`${this.name} makes sound`)
    }
}

class Dog extends Animal {
    breed: string

    constructor(name:string, breed:string) {
        super(name)
        this.breed = breed
    }
    speak():void {
        console.log(`${this.name}, a ${this.breed} barks`)
    }
}

const dog1 = new Dog('Buddy', 'Labrador')
dog1.speak()

/////////////////// getters and setters \\\\\\\\\\\\\\\\\\\\\\\\\\

class Circle {
    private _radius: number
    
    constructor(radius:number) {
        this._radius = radius
    }

    get radius() {
        return this._radius
    }

    set radius(value:number) {
        if (value > 0) {
            this._radius = value
        } else {
            console.log("Radius must be positive!")
        }
    }
}

const circle = new Circle(5)
console.log(circle.radius)

circle.radius = 10
console.log(circle.radius)

circle.radius = -3

/////////////////////////// static members \\\\\\\\\\\\\\\\\\\\\\\\\

class MathHelper {
    static PI: number = 22/7
    static calculateArea(radius: number): number {
        return MathHelper.PI * radius * radius
    }

}

console.log(MathHelper.calculateArea(3.5))

///////////////////// Abstract classes - meant to be extended \\\\\\\\\\\\\\\\\

abstract class Shape {
    abstract area(): number
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super()
    }
    area(): number {
        return this.width * this.height
    }
}

const rect1 = new Rectangle(7, 9)
console.log(rect1.area())


//////////////////////// interface with classes \\\\\\\\\\\\\\\\\\\\\\\\

interface FullName {
    myNames(): string
}

class MySelf implements FullName {
    constructor (public firstName:string, public secondName:string) {
        this.firstName = firstName
        this.secondName = secondName
    }

    myNames() {
        return `Full Names: ${this.firstName} ${this.secondName}`
    }
}

const Allan = new MySelf('Allan', 'Mathenge')
console.log(Allan.myNames())

/////////////////////// class expressions \\\\\\\\\\\\\\\\\\\\\\\\\\\

const Person2 = class {
    constructor(public name:string, public age:number){}

    greet() {
        console.log(`Hi, I am ${this.name}`)
    }
}

const person2 = new Person2('Allan', 30)
person2.greet()

