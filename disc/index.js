"use strict";
let age = 10;
console.log(age);
let studentName = "Saman Kumara";
console.log(studentName);
let isActive = true;
console.log(isActive);
let nullOb = null;
console.log(nullOb);
let undifinedData = undefined;
console.log(undifinedData);
let animals = ['', '', ''];
console.log(animals);
let vehicles = ['', '', ''];
console.log(vehicles);
let student = { name: 'ranil', age: 20 };
console.log(student);
let dog = { name: 'togo', bread: 'husky', age: 1 };
console.log(dog);
function getAgeAfterThreeYr(age, name) {
    if (name) {
        console.log(`hello ${name}`);
    }
    else {
        console.log(`hello ${age}`);
    }
    return age + 3;
}
let myAge = getAgeAfterThreeYr(10);
console.log(myAge);
let myNewAge = getAgeAfterThreeYr(24, "sadeepa");
const rate = 1.5;
let myName = 'Saman';
console.log(typeof myName);
let numbers = [10, 20, 30, 40];
console.log(numbers[0]);
let strings = ['', '', '', ''];
strings.push('10');
strings.push('20');
strings.pop();
console.log(strings);
let students = ['saman', 20];
let array = [];
for (let i = 0; i <= 10; i++) {
    array.push(i + 10);
}
const helloIsuru = (name) => {
    console.log(`HellO komada ${name}`);
};
helloIsuru('Hello');
function horek(name, isAThif) {
    if (isAThif == true) {
        console.log(`${name} Horaaaa!`);
    }
    else {
        console.log(`${name} eya hodai`);
    }
}
horek('Ranil', true);
horek('Anura');
function sum(numberOne, numberTwo = 10) {
    console.log(`${numberOne} And ${numberTwo}`);
}
sum(20);
function summer(...values) {
    let count = 0;
    for (let temp of values) {
        count += temp;
    }
    return count;
}
const person = {
    name: 'Mahinda',
    age: 90,
    address: {
        city: 'nuwara',
        postalCode: 2000
    }
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.address.city);
console.log(person.address.postalCode);
const cat = {
    name: 'Mahinda',
    age: 12,
    address: {
        city: 'Nuwara',
        postalCode: 200
    }
};
console.log(cat);
console.log(cat.name);
console.log(cat.age);
console.log(cat.address.city);
console.log(cat.address.postalCode);
class Dog {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
const dog1 = new Dog('Mahinda', 90, { city: 'Nuwara', postalCode: 200 });
console.log(dog1);
console.log(dog1.name);
console.log(dog1.age);
console.log(dog1.address.city);
console.log(dog1.address.postalCode);
class Buffalow {
    constructor(name1, age1) {
        this.name1 = name1;
        this.age1 = age1;
    }
    setAge(age1) {
        if (age1 < 0) {
            return;
        }
        this.age1 = age1;
    }
}
const a1 = {
    name: 'Dog',
    isActive: true
};
const a2 = {
    name: 'Kaml',
    age: 20,
    isActive: false
};
const ranil = { name: 'ranil', age: 20, horekda: true, canEnglis: true };
const anura = { name: 'anura', age: 30, canEnglis: false };
console.log(ranil);
console.log(anura);
class Animal1 {
    constructor(Aname, Aage) {
        this.Aname = Aname;
        this.Aage = age;
    }
    sound() {
        console.log(`${this.Aname} sound`);
    }
}
class Dog2 extends Animal1 {
    constructor(Aname, Aage, breed) {
        super(Aname, Aage);
        this.breed = breed;
    }
}
let animal_1 = new Animal1('Animal1', 20);
let dog2 = new Dog2('dog', 20, 'Breed');
console.log(animal_1);
console.log(dog2);
animal_1.sound();
dog2.sound();
class Phone1 {
    constructor(displaySize) {
        this.displaySize = displaySize;
    }
    call() {
        console.log('calling!...');
    }
    massage() {
        console.log('massaging!...');
    }
}
class phoneOshada extends Phone1 {
    fileTransfer() {
        console.log("Dansing....!");
    }
}
function getNumberData(value) {
    return value;
}
function getStringData(value) {
    return value;
}
let numberValue = getNumberData(10);
let stringValue = getStringData("nimal");
console.log(numberValue);
console.log(stringValue);
function getData(value) {
    return value;
}
let numberValue1 = getData(10);
let stringValue1 = getData('Nimal');
console.log(numberValue);
console.log(stringValue);
let L1 = { type: 'type String' };
let L2 = { type: 2000 };
let L3 = { type: true };
let H1 = { type: 'type String' };
let H2 = { type: 120 };
let H3 = { type: true };
function showLength(value) {
    console.log(value.length);
}
showLength([20, 20, 40]);
showLength('Muthuuu');
function dev(num1, num2) {
    if (num2 == 0) {
        throw new Error("wrong input");
    }
    return num1 / num2;
}
try {
    let answer = dev(10, 0);
    console.log(answer);
}
catch (error) {
    if (error instanceof Error) {
        console.log(error);
    }
}
finally {
    console.log('Finaly');
}
function setStringData(value) {
    console.log(typeof value);
}
setStringData('String Data');
function setNumberData(value) {
    console.log(typeof value);
}
setNumberData(130);
function setDatas(value) {
    console.log(typeof value + ` ${value}`);
}
setDatas('Sadeepa');
function setDatas1(value) {
    if (typeof value == 'number') {
        console.log('Number');
    }
    else {
        console.log('String');
    }
    console.log(typeof value + ` ${value}`);
}
class Elephant {
    sound() {
        console.log('Elephant Sound');
    }
    walk() {
        console.log('Elephant walk');
    }
}
class Cheeta {
    sound() {
        console.log('Cat sound');
    }
}
function elephantExecuter(value) {
    value.sound();
}
function cheetaExecuter(value) {
    value.sound();
}
elephantExecuter(new Elephant());
cheetaExecuter(new Cheeta());
function executor(value) {
    if (value instanceof Cheeta) {
        value.sound();
    }
    else {
        value.walk();
    }
}
executor(new Cheeta());
function execute(vehicle) {
    vehicle;
}
