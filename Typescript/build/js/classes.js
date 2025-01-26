"use strict";
// console.log("Classes")
class Coder1 {
    constructor(
    // All these members are public
    name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
// Adding visiblity modifiers or visibility members / access modifiers / data modifiers
// If we add visibility modifiers then we do not need those defined above
class Coder {
    constructor(name, // once value is assigned cannot be changed
    music, age, // can only be accessed inside the class
    lang = 'Typescript'
    // difference btn private and protected - protected member can be accessed inside the class or derived/extended class, but we cannot access private
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello I'm ${this.age} years old`;
    }
}
const code = new Coder('Allan2', 'RnB', 28);
console.log(code.name, code.music);
console.log(code.getAge());
// console.log(code.age)
// console.log(code.lang)
class webDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const sara = new webDev('mac', 'Sara', 'Lofi', 25);
console.log(sara.getLang());
class Guitarist4 {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist4('Jimmy', 'violin');
console.log(Page.play('strums'));
class Html {
    constructor(greet, starts) {
        this.greet = greet;
        this.starts = starts;
    }
    codedLang(code) {
        return `${code}: ${this.greet} ${this.starts}`;
    }
}
const HtmlLang = new Html("Hello", "World");
console.log(HtmlLang.codedLang("Begin"));
//////////////////////////////////////////////////
class Peeps {
    // static keyword it does not belong to any instantiation of the class, it applies to the class directly.
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
const John = new Peeps('John');
const John1 = new Peeps('John');
console.log(John.id);
console.log(John1.id);
console.log(Amy.id);
console.log(Steve.id);
console.log(Peeps.count);
//////////////////////////// getter and setter \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
class Bands {
    constructor() {
        this.dataState = [];
    }
    // get keyword is used to get data in that private state dataState
    get data() {
        return this.dataState;
    }
    set data(value) {
        // setters cannot retun a value
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Adellle', 'Jason Derulo', 'Asake'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'Snoop dogg'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data];
