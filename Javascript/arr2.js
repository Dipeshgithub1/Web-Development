const merver_heros = ["spiderman" ,"batman", "thor"]

const dc_heros = ["flask" ,"superman", "Ironman"]

merver_heros.push(dc_heros);

console.log(merver_heros);
console.log(merver_heros[3][0]);

const all_heros = merver_heros.concat(dc_heros);

console.log(all_heros)

const new_heros = [...merver_heros, ...dc_heros];

console.log(new_heros)