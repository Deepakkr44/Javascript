const name="Deepak"
const repoCount = 50

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);


const gameName= "night-riders-club"

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName. toUpperCase);
// console.log(gameName.length);

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf ('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne= "   Deepak    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_show"
console.log(url.replace('?','-'));

console.log(url.includes('w3schools'));

console.log(url.split('-'));





