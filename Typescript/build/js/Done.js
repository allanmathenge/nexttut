"use strict";
class Pianist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const Adelle = new Pianist('Adelle', 'Vocals');
console.log(Adelle.play('sings'));
class Footballer {
    constructor(name, club) {
        this.name = name;
        this.club = club;
    }
    plays(action) {
        return `${this.name} ${action} for ${this.club}`;
    }
}
const Ronaldo = new Footballer("Ronaldo", 'Alhadri');
console.log(Ronaldo.plays("plays"));
// Classes
class Coder0 {
    constructor(name, music, age, lang = 'TypeScripts') {
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
        return `Hello, I'm ${this.music} listerner`;
    }
}
class AnotherCoder extends Coder0 {
    constructor(computer, name, age, lang) {
        super(name, age, lang);
        this.computer = computer;
        this.computer = computer;
    }
    getLang(action) {
        return `I ${action} ${this.lang}`;
    }
}
const MyCode = new AnotherCoder('HP', 'Mathenge', '23', 'TS');
console.log(MyCode.getLang('write'));
// Another Classes example
class Code {
    constructor(lang, name, duration) {
        this.lang = lang;
        this.name = name;
        this.duration = duration;
        this.lang = lang;
        this.name = name;
        this.duration = duration;
    }
    getLang() {
        return `I am ${this.name} write ${this.lang}`;
    }
}
class Name extends Code {
    constructor(editor, lang, name, duration) {
        super(lang, name, duration);
        this.editor = editor;
        this.editor = editor;
    }
    writeCode(action) {
        return `I have ${action} ${this.lang} using ${this.editor} for ${this.duration} years `;
    }
}
const Myself = new Name('VS code', 'TS', 'Allan', 2);
console.log(Myself.writeCode('written'));
// ///////////////////////////////////////////////////////
class Peeps2 {
    static getCount() {
        return Peeps2.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps2.count;
    }
}
Peeps2.count = 0;
const David = new Peeps2('David');
const James = new Peeps2('James');
const Thomas = new Peeps2('Thomas');
console.log(Peeps2.count);
console.log(David.id);
console.log(James.id);
console.log(Thomas.id);
class Bank {
    static getBalance() {
        return Bank.balance;
    }
    constructor(name) {
        this.name = name;
        this.sum = ++Bank.balance;
        this.name = name;
    }
}
Bank.balance = 1000;
const MyBalance = new Bank('Allan');
const Sam = new Bank('Sam');
const Job = new Bank('Job');
console.log(MyBalance.sum);
console.log(Sam.sum);
console.log(Job.sum);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method
    greet(greetins) {
        return `${greetins}, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
const person1 = new Person('John', 20);
console.log(person1.greet('Hello'));
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    drive(action) {
        return `Hello, I ${action} a ${this.model}`;
    }
}
const car1 = new Car('Toyota', 'Corolla');
console.log(car1.drive('drive'));
////////////////////////// Access Modifiers - specify access levels for class members \\\\\\\\\\\\\\\\\\\\\\
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getSalary() {
        return `Her salary is ${this.salary}`;
    }
}
const employee1 = new Employee('Alice', 40000);
console.log(employee1.getSalary());
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes sound`);
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    speak() {
        console.log(`${this.name}, a ${this.breed} barks`);
    }
}
const dog1 = new Dog('Buddy', 'Labrador');
dog1.speak();
/////////////////// getters and setters \\\\\\\\\\\\\\\\\\\\\\\\\\
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        if (value > 0) {
            this._radius = value;
        }
        else {
            console.log("Radius must be positive!");
        }
    }
}
const circle = new Circle(5);
console.log(circle.radius);
circle.radius = 10;
console.log(circle.radius);
circle.radius = -3;
/////////////////////////// static members \\\\\\\\\\\\\\\\\\\\\\\\\
class MathHelper {
    static calculateArea(radius) {
        return MathHelper.PI * radius * radius;
    }
}
MathHelper.PI = 22 / 7;
console.log(MathHelper.calculateArea(3.5));
///////////////////// Abstract classes - meant to be extended \\\\\\\\\\\\\\\\\
class Shape {
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
const rect1 = new Rectangle(7, 9);
console.log(rect1.area());
class MySelf {
    constructor(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.firstName = firstName;
        this.secondName = secondName;
    }
    myNames() {
        return `Full Names: ${this.firstName} ${this.secondName}`;
    }
}
const Allan = new MySelf('Allan', 'Mathenge');
console.log(Allan.myNames());
/////////////////////// class expressions \\\\\\\\\\\\\\\\\\\\\\\\\\\
const Person2 = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
};
const person2 = new Person2('Allan', 30);
person2.greet();
