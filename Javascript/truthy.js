const userEmail = "dipe@123.ai";

if(userEmail){
    console.log("shows user email")
}
else{
    console.log("not shows userEmail")
}


//Falsy value

//false,"",BigInt 0n,0,-0,undefined,null,NaN

//Truthy value

//"0",'false'," ",[],{},function(){}


//Nullish Caolescing operator (??)

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
val1 = undefined ?? 18;

console.log(val1)


//Terniary operator

//condition ? true statement ? fale;
const teaPrice = 100;
teaPrice >= 80 ? console.log("less than 80"):console.log("more than 80");
