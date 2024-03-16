const name = "dipesh"
const repoCount = 100;

//console.log(name + repoCount)

console.log(`hello my name is ${name} and my repocount ${repoCount}`);

const gameName = new String('dipeshhhh')
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf("h"));

const newString = gameName.substring(0,5)
console.log(newString)

const anotherString = gameName.slice(-8,6);
console.log(anotherString)

const newStringone = "   Dipesh   ";
console.log(newStringone)
console.log(newStringone.trim());


