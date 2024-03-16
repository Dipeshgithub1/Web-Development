const user = {
    username : "Dipesh",
    price : 9999,

    welcomeMsg : function(){
     console.log(`${this.username} , welcome to our website`)
    // console.log(this)
    }

}

user.welcomeMsg()
//user.username = "sam bahadur";

//user.welcomeMsg()
//console.log(this)*/



/*function chai(){
   let username = "Dipesh";
   console.log(this.username)
}
chai() */


/*const chai = function() {
let username = "Dipesh"
console.log(this.username)

}
chai() */


/*const chai = () => {  //arrow function
    let username = "Dipesh"
    console.log(this.username)
    
    }
    chai() */


const addTwo = (num1,num2) => {
    return num1 + num2;
}

console.log(addTwo(3,2))

//implicit return

const subTwo = (num1,num2) =>  num1 - num2;


console.log(subTwo(4,3))