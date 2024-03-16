//for of

//["","",'']
//[{},{},{}]

const arr =  [1, 2, 3, 4]

for (const num of arr) {
    console.log(num)
    
}

const greeting = "hello world";

for (const greet of greeting) {
   console.log(`each char is ${greet}`) 
}

//map 

const map = new Map();
map.set('IN' ,"India" )
map.set('USA' ,"United state of America")
map.set('UAE' ,"United Arab Emirates")

console.log(map)

for (const [key,value] of map) {
    console.log(key, '-',value);
    
}