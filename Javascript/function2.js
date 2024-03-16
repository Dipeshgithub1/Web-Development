function multiply (num1,num2){
    return num1 * num2;
};

console.log(multiply(5,6));


let sayHello= function(){
    console.log("welcome to Javascript");
};

sayHello()

let saHello = () => {
    console.log("learning javascript");

};
saHello()


function shoppingCart(...num1) {
    return num1;
};

console.log(shoppingCart(200,2000,23900))



const user = {
    username : "Dipesh",
    price : 1999,
}
function handleObject(anyobject){
    console.log(`the username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user)