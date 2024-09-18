const user = {
    username : "dipesh",
    loginCount: 8,
    signedIn: true,

    getUserdetalis: function(){
  console.log("Got user details from database")
    }
}

console.log(user.username)
console.log(user.loginCount)

console.log(user.signedIn)

console.log(user.getUserdetalis())

