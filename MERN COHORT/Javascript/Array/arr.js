const intialArray = [1,2,3];

//for(let i=0;i<intialArray.length;i++){
  //  console.log(intialArray[i])
//}

function logThing(str){
    console.log(str);
}
intialArray.forEach(logThing)

logThing(1);
logThing(2);
logThing(3);