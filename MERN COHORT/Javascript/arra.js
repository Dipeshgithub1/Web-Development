//const personAraay = ["dip","anki","swati"];

//const GenderArray = ["male","male","female"];

//for(let i=0;i < personAraay.length;i++){

  //  if(GenderArray[i]=="male"){
    //    console.log(personAraay[i]);
    //}
    //else{

    //}

//}

/*const user1 = {
    firstname : "Dipesh",
    gender : "male"
};
console.log(user1["firstname"]);

console.log(user1["gender"]); */

const allUser = [{
  firstname : "Dip",
  gender : "male"
},{
  firstname : "harshita",
  gender : "female"
},{
  firstname : "swati",
  gender : "female"
}]

for(let i=0;i<allUser.length;i++){
  if(allUser[i]["gender"]== "female"){
    console.log(allUser[i]["firstname"])
  }

}