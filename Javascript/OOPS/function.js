function multiPly5(num){
    return num * 5;
}

console.log(multiPly5(5))

multiPly5.power = 2;
console.log(multiPly5(5))
console.log(multiPly5.power);

console.log(multiPly5.prototype)


function createUser(username,score){
this.username = username
this.score = score
}


createUser.prototype.increment = function(){
this.score++;
}
createUser.prototype.printMe = function()
    {
   console.log(`prices is ${this.score}`)
    }

const chai = new createUser("cofee",300)

const tea = createUser("tea",11)


chai.printMe()