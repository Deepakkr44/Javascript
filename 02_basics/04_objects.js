// const tinderuser= new Object()

const tinderuser={}

tinderuser.id="123abc"
tinderuser.name= "Deepak"
tinderuser.isLoggedIn= false

// console.log(tinderuser );

const regularuser={
    email: "deepak143449@gmail.com",
    fullname:{
        userfullname:{
            firstName: "Deepak",
            lastName : "Kumar"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstName);

const obj1= {1:"a", 2:"b"}
const obj2= {3:"a", 4:"b"}

// const obj3={obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2) // here {}- used as a target while obj1,obj2 etc... used as a source

const obj3= {...obj1, ...obj2} // spread operator
// console.log(obj3);

users=[
    {
        email:"deepak143449@gmail.com"

    },
    {

    }
    
]

users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser)); // returns array inside array

console.log(tinderuser.hasOwnProperty('isLoggedIn'));// checks if the function has this property or not



