//const tinderUser = new Object() //singletone object

const tinderUser = {}     //literal object

tinderUser.id = "132@abc"
tinderUser.name = "dipe"
tinderUser.isLoggedIn = "false"




console.log(tinderUser)

const regularUser = {
    email : "dk964@gmail.com",
    fullname : {
         username : {
            firstname : "dipesh",
            lastname : "mehra",
         }
    }
}

console.log(regularUser)

console.log(regularUser.email)

console.log(regularUser.username)

console.log(regularUser.fullname.username.firstname)


const obj1 = {1 : "a" , 2 : "b"}

const obj2 = {3 : "d" , 4 : "e"}

// const obj3 = Object. assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}


console.log(obj3)

console.log(Object.keys(tinderUser))


console.log(Object.values(tinderUser))


console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));




