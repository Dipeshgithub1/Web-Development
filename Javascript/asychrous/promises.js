const promiseOne = new Promise(function(resolve, reject)  {
    //Do an async task
    //DB calls,crytography,network call

    setTimeout( function() {
        console.log("Async task is completed");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("promises consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
    console.log("Aync task2 complete")
    resolve();
    },1000)
}).then(function(){
    console.log("Asyc is resolved")
})

const promisesTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
   resolve({username: "dipesh",eamail :"dipesh@123.com"})
   },1000)
})

promisesTwo.then(function(user){
  console.log(user)
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"amarjeet",email:"amaerjeet.com",password:"123"})
        }
        else{
            reject("ERRORS! something going wrong ")
        }
    },1000)
})

promiseThree.then((user) => {
    console.log(user);
    return user.username;

}).then((username)=>{
  console.log(username)
}).catch(function(ERRORS){
    console.log(ERRORS)
}).finally(() => console.log("THE PROMISES EITHER RESOLVE OR REJECTS"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"JAVASCRIPT",password:"123"})
        }
        else{
            reject("ERRORS! OOPS WRONG! ")
        }
    },1000)
})


async function consPromisesFive() {
    try {
        const response = await promiseFive; // Assuming promiseFive is defined elsewhere
        console.log(response);
    } catch (error) {
        console.error("Error:", error);
    }
}

consPromisesFive();
