// singleton

//object literal
const mySym = Symbol("key1")

const jsUser = {
    name: "shivam", //key:value
    "full name" : "Shivam rajpur",
    [mySym]: "mykey1",
    age: 16,
    lacation: "delhi",
    email: "shivam.google.com",
    isLoggedIn: true,
    LastLogindays: ["monday","sunday"],

}
console.log(jsUser.name)
console.log(jsUser["email"])

console.log(jsUser["isLoggedIn"])

console.log(jsUser.isLoggedIn)

console.log(jsUser["full name"])

console.log(jsUser[mySym])

jsUser.email = "sivam.edge.com";

console.log(jsUser["email"])

//Object.freeze(jsUser)

//jsUser.email = "shivam.chatgpt.com"

//console.log(jsUser["email"])

//console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user");
}



console.log(jsUser.greeting)
console.log(jsUser.greeting())


jsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(jsUser.greeting)
console.log(jsUser.greeting())


