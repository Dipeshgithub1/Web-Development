//let myName = "Dip  ";

//console.log(myName.length)

//console.log(myName.trim().length)

myHeros = ["thor","spiderman"];



let herosPower = {
 thor : "Hammer",
 spiderman : "sling",

 getSpiderpower: function(){
    console.log(`spider power is ${this.spiderman}`);

    
    }
 }
 Object.prototype.Dip = function(){
    console.log(`Dip is presenting object`)
}
Array.prototype.heyDip = function(){
   console.log(`dip  says hello to all`)
}
//herosPower.Dip()
myHeros.Dip()

myHeros.heyDip()

//herosPower.heyDip()




//inheritance 
const User = {
name : "dip",
email :"dip@Geolocation.com"
}
const Teacher = {
   makeVideo : true
}

const TeachingSupport = {
   isAvailabe : false
}

const TAsupport = {
   makeAssignment :'JS ASSIGNMENT',
   isFulltime : true,
   __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax 

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "CHAIAURDIP   "

string.prototype.trueLength = function(){
   console.log(`${this}`)
   console.log(`${this.name}`)
   console.log(`True Length is : ${this.trim().length}`)

}

anotherUsername.trueLength()





