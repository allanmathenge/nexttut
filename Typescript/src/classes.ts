

// console.log("Classes")

class Coder1 {
    name: string
    music: string
    age: number
    lang: string

    constructor(
        // All these members are public
        name: string,
        music:string, 
        age:number,
        lang:string
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }
}

// Adding visiblity modifiers or visibility members / access modifiers / data modifiers
// If we add visibility modifiers then we do not need those defined above
class Coder {

    secondLang!: string // we are not going to initialize this property right away

    constructor(
        public readonly name: string, // once value is assigned cannot be changed
        public music:string, 
        private age:number, // can only be accessed inside the class
        protected lang:string = 'Typescript'
        // difference btn private and protected - protected member can be accessed inside the class or derived/extended class, but we cannot access private
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }
    public getAge() {
        return `Hello I'm ${this.age} years old`
    }
}

const code = new Coder('Allan2', 'RnB', 28)
console.log(code.name, code.music)
console.log(code.getAge())
// console.log(code.age)
// console.log(code.lang)

class webDev extends Coder {
    constructor( 
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const sara = new webDev('mac', 'Sara', 'Lofi', 25)
console.log(sara.getLang())

///////////////////////////////////////////////////////////

// Applying an interface to a class

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist4 implements Musician {
    name: string
    instrument: string

    constructor(name:string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist4('Jimmy', 'violin')
console.log(Page.play('strums'))

interface HelloWorld {
    greet:string
    starts:string
    codedLang(code:string):string
}

class Html implements HelloWorld {
    greet: string
    starts: string

    constructor(greet:string, starts:string) {
        this.greet = greet
        this.starts = starts
    }

    codedLang(code: string): string {
        return `${code}: ${this.greet} ${this.starts}`
    }
}

const HtmlLang = new Html("Hello", "World")
console.log(HtmlLang.codedLang("Begin"))

//////////////////////////////////////////////////

class Peeps {
    static count: number = 0
    // static keyword it does not belong to any instantiation of the class, it applies to the class directly.

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')
const John = new Peeps('John')
const John1 = new Peeps('John')

console.log(John.id)
console.log(John1.id)
console.log(Amy.id)
console.log(Steve.id)
console.log(Peeps.count)

//////////////////////////// getter and setter \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    // get keyword is used to get data in that private state dataState

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        // setters cannot retun a value
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['Adellle', 'Jason Derulo', 'Asake']

console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'Snoop dogg']
console.log(MyBands.data)
MyBands.data = [...MyBands.data]

