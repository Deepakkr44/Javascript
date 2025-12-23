// Data Types= 1.Premetive  2. Non-Premitive

// 7 types: (String,Number,Boolean,null,undefined,Symbol,BigInt)

const score = 100
const scoreValue = 100.3

const isLoggedIn= true
const uotsideTemp= null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bigNumber= 127453713836n 


//reference(non preemitive data type)

//Array, Objects,Functions

const hero =("hitesh", "raman", "Deepak") ;
let myObj = {
    name: "Deepak",
    age: 25 ,
    
}

const myFunction= function(){
    console.log("hello world");
    
}

console.log(typeof myFunction);
