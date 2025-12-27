const marvel_heroes =["Thor", "IronMan","Loki","Hulk" ]

const dc_heroes=["Superman","Batman","flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3],[1]);

// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes);

// const allHeros= marvel_heroes.concat(dc_heroes)
// console.log(allHeros);

const all_new_heros=[...marvel_heroes, ...dc_heroes]
console.log(all_new_heros);

const another_array= [1, 2, 3, 4, 5,[4, 5, 6],6, 7, [4, 5]]

const real_another_array= another_array.flat(Infinity)

console.log(another_array);

console.log(real_another_array);


console.log(Array.isArray("Deepak"));
console.log(Array.from("Deepak"));
console.log(Array.from({name:"Deepak"})); // When it can't define the type then it will give empty array as a output

let Score1 =100
let Score2 =200
let Score3 =300

console.log(Array.of(Score1,Score2,Score3));


