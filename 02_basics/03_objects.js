 // singleton

 //objects.Create
 //objects literals

 const mySym= Symbol("Key1")

 const Jsuser={
    name:"Deepak", "fullName":"Deepak-Kumar",
    [mySym]: "myKey1",
    age:25,
    location:"delhi",
    email: "deepak143449@gmail.com",
    isLoggedIn: false,
    lastLoggingDays:["Monday","Saturday"]

 }

//  console.log(Jsuser.email);
//  console.log(Jsuser["email"]);
//  console.log(Jsuser["fullName"]);
//  console.log(Jsuser[mySym]);

 Jsuser.email = "deepakmorye4@gmail.com"
 
//  Object.freeze(Jsuser)
 Jsuser.email= "deepak143449@gmail.com"
//  console.log(Jsuser);
 
Jsuser.greeting = function(){
   console.log("Hello JS User");
   
}
Jsuser.greetingTwo = function(){
   console.log(`Hello JS User, ${this.fullName}`);
    
}
// console.log(Jsuser.greeting); //Undefined
// console.log(Jsuser.greeting()); //undefined
console.log(Jsuser.greeting()); //ndefined
console.log(Jsuser.greetingTwo()); //undefined


 
 