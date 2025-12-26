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


