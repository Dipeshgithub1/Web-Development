function concat(str1,str2){
    return str1 + str2;
}

let x = " welcome to greeks for greeks  ";
let y = " Node.js Tutorial ";

let z = ["greeks","for","greeks"];

console.log(x);

console.log(y)

console.log("Concat using (+): ",(x + y));

//console.log("Concat using function :", concat(x,y));
console.log("Concat using function: ", concat(x, y)); 

console.log("split string : ", x.split(' '));

console.log("join string : ",z.join(', '));

console.log("char at index 5:",x.charAt(5))
