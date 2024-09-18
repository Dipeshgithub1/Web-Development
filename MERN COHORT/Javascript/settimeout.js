function greet(){
    console.log("Hello world")
}

function greetAlian(){
    console.log("Hello alian")
}

setInterval(greetAlian,1*1000)

function setInterval(a,duration){
    a();
    console.log()
}

//function setTimeout(a,b){}