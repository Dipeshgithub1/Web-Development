const app = require('./app');



var x = '20';
const arr = [2,4,7,1,3,8,3];
//console.log(arr[0])

//console.log(app)

let result =arr.filter((item)=>{
    return item===3;
})
console.log(result)