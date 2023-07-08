
//number
let age=10;
console.log(age)

//string
let studentName="Saman Kumara"
console.log(studentName)


//boolean

let isActive=true;
console.log(isActive)


//null values

let nullOb:null=null
console.log(nullOb)


//undifined data
let undifinedData:undefined=undefined
console.log(undifinedData)

//generics

let animals:Array<String>=['','','']
console.log(animals)


//String other way
let vehicles:string[]=['','','']
console.log(vehicles)



let student:{name:string,age:number}={name:'ranil',age:20}
console.log(student)



//-------------------------------------------------

interface Animal{

    name:String
    bread:String
    age:number

}

let dog:Animal={name:'togo',bread:'husky',age:1}

console.log(dog)



//functions

//?  optional
function getAgeAfterThreeYr(age:number,name?:string):number{

    if(name){
        console.log(`hello ${name}`)
    }
    else{
           console.log(`hello ${age}`)
    }
    return age+3

}

let myAge=getAgeAfterThreeYr(10)

console.log(myAge)

let myNewAge:number=getAgeAfterThreeYr(24,"sadeepa")



/////////////////////////////////////
const rate:number=1.5



//check type
//type inference
let myName='Saman'
console.log(typeof myName)



///////////////////////////////////////////////////

let numbers:number[]=[10,20,30,40]
console.log(numbers[0])//10

//these are type safe canot add other type
let strings:Array<String>=['','','','']

strings.push('10')
strings.push('20')
strings.pop();

console.log(strings)

//==================================================

//tuples

let students:[string,number]=['saman',20]


//read array

let array:Array<Number>=[]


for(let i=0; i<=10;i++){

    array.push(i+10);

}

/*
console.log(array)
for(let i=array.length;0<=array.length;i--){
    console.log(array.pop());
}
*/


//function

const helloIsuru=(name:String):void=>{

    console.log(`HellO komada ${name}`)

}

helloIsuru('Hello')




//optionsl parameters functions

function horek(name:String,isAThif?:Boolean):void{


    if(isAThif==true){
        console.log(`${name} Horaaaa!`)
    }
    else{
        console.log(`${name} eya hodai`)
    }


}


horek('Ranil',true)

horek('Anura')


//default parameters
function sum(numberOne:Number,numberTwo=10):void{

    console.log(`${numberOne} And ${numberTwo}`)
}

sum(20);


//control + k + c
//all comment

function summer(...values: number[]): number {
    let count: number = 0;
   for (let temp of values) {
        count += temp;
    }
    return count;
}




///Objects

//litterel base
const person={
    name:'Mahinda',
    age:90,
    address:{
        city:'nuwara',
        postalCode:2000
    }
}

//object accessing

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.address.city)
console.log(person.address.postalCode)



//interface base

interface Cat{
    name:string;
    age:number;
    address:{
        city:string;
        postalCode:number;
    }
}

const cat:Cat={

    name:'Mahinda',
    age:12,
    address:{

        city:'Nuwara',
        postalCode:200

    }

}

console.log(cat)
console.log(cat.name)
console.log(cat.age)
console.log(cat.address.city)
console.log(cat.address.postalCode)



//calss base

class Dog{
    name:string;
    age:number;
    address:{
        city:string;
        postalCode:number;
    }

    constructor(name:string,age:number,address:{city:string,postalCode:number}){

        this.name=name
        this.age=age
        this.address=address
    }
}


const dog1=new Dog('Mahinda',90,{city:'Nuwara',postalCode:200})



console.log(dog1)
console.log(dog1.name)
console.log(dog1.age)
console.log(dog1.address.city)
console.log(dog1.address.postalCode)



class Buffalow{
    private name1:string;
    private age1:number;

    constructor(name1:string,age1:number){
        this.name1=name1;
        this.age1=age1
    }

    //using encapsulation we can add logic for setter
    public setAge(age1:number){

        if(age1<0){
            return;
        }
        this.age1=age1
    }
}

//interview can ask encapsulation



//optional
//read only'

//======================================================================================================================

interface Basil{

    name:string,
    age?:number,//optional
    readonly isActive?:boolean


}

const a1:Basil={

    name:'Dog',
    isActive:true
}

const a2:Basil={

    name:'Kaml',
    age:20,
    isActive:false
}


//read only
//can't change after creating object beacause this use readoly property


//a1.isActive=false


interface Perso{

    name:string,
    age:number,
    canEnglish:boolean
}


interface Ranil extends Perso{

    
    horekda:boolean,
    

}

interface Anura extends Perso{



}

const ranil={name:'ranil',age:20,horekda:true,canEnglis:true}
const anura={name:'anura',age:30,canEnglis:false}

console.log(ranil)
console.log(anura)





//////////////////////////////////////////////////////////////////////////////////////////////////////////


class Animal1{

    Aname:string;
    Aage:number

    constructor(Aname:string,Aage:number){
        this.Aname=Aname;
        this.Aage=age
    }

    sound():void{

        console.log(`${this.Aname} sound`)
    }
}



class Dog2 extends Animal1{

    breed:string;

    constructor(Aname:string,Aage:number,breed:string){
        super(Aname,Aage)
        this.breed=breed
    }
}


let animal_1=new Animal1('Animal1',20)

let dog2=new Dog2('dog',20,'Breed')

console.log(animal_1)
console.log(dog2)

animal_1.sound()
dog2.sound()





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// eshan => ABC => (mobile Phone) => project => (2020)
// Oshada => ABC => (mobile Phone) => project => (2021)
// Hasantha => ABC => (mobile Phone) => project => (2022)
//

//abstract class athule implimented or un inplimented thiyenna puluwan
abstract class Phone1{ // eshan
    private displaySize:number;
    constructor(displaySize:number){
        this.displaySize=displaySize;
    }
    
    call():void{
        console.log('calling!...');
        
    }
    massage():void{
        console.log('massaging!...');
        
    }
    abstract fileTransfer():void;

}


class phoneOshada extends Phone1{

    
    fileTransfer(): void {
        console.log("Dansing....!")
    }


}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//generics


function getNumberData(value:number):number{
    return value;
}

function getStringData(value:string):string{
    return value;
}

let numberValue= getNumberData(10);
let stringValue= getStringData("nimal");

console.log(numberValue);
console.log(stringValue);




/////////////////////////////////////////


function getData<T>(value:T):T{
    return value
}

let numberValue1=getData<number>(10)
let stringValue1=getData<string>('Nimal')


console.log(numberValue)
console.log(stringValue)



//reusable components


interface Shape1{
    type:string

}

interface Shape2{

    type:number
}

interface Shape3{

    type:boolean

}


let L1:Shape1={type:'type String'}
let L2:Shape2={type:2000}
let L3:Shape3={type:true}



//re usable
interface Shape<T>{
    type:T
}

let H1:Shape<string>={type:'type String'}
let H2:Shape<number>={type:120}
let H3:Shape<boolean>={type:true}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//generic constrains

interface elementLength{
    length:number


}


function showLength<T extends elementLength>(value:T):void{

    console.log(value.length)
}

showLength([20,20,40])
showLength('Muthuuu')
//showLength(false)



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function dev(num1:number,num2:number):number{

    if(num2==0){

        throw new Error("wrong input");
        
    }

    return num1/num2



}

try{

    let answer=dev(10,0)
console.log(answer)

}catch(error){

    if(error instanceof Error){
    console.log(error);
    }
    
}finally{

    console.log('Finaly')
}


//type guards

//=======================================================================


function setStringData(value:string):void{

    console.log(typeof value)

}


setStringData('String Data')



function setNumberData(value:number):void{

    console.log(typeof value)

}

setNumberData(130)



//using type gard

function setDatas(value:string | number){

     console.log(typeof value+` ${value}`)
}


setDatas('Sadeepa')


//type guards can devide two 1. type of
//                           2. instance of



//1

function setDatas1(value:string | number){

    if(typeof value =='number'){

        console.log('Number')
    }
    else{
        console.log('String')
    }


     console.log(typeof value+` ${value}`)
}


//2
class Elephant{

    sound():void{

        console.log('Elephant Sound');
    }
    walk(){
        console.log('Elephant walk');
    }
}

class Cheeta{

    sound():void{
        console.log('Cat sound')
    }
}


function elephantExecuter(value:Elephant){

    value.sound()

}

function cheetaExecuter(value:Cheeta){

    value.sound()

}



elephantExecuter(new Elephant())


cheetaExecuter(new Cheeta())

//                           2. instance of
function executor(value:Elephant | Cheeta){
    if(value instanceof Cheeta){
        value.sound();
    }else{
        value.walk();
    }
    
}

executor(new Cheeta())




//assertion

interface Vehicle{
    type:string
}
interface Car extends Vehicle{
    drive():void;
}
interface Van extends Vehicle{
    start():void;
}
interface Bus extends Vehicle{
    stop():void;
}


function execute(vehicle: Vehicle):void{
    // (vehicle as Van).
    (vehicle as Bus)
}














