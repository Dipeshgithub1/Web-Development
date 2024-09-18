function calculateArith(a,b,type){
    if(type =='sum'){
        return a + b;
    }
    if(type = "minus"){
        return a - b;
    }
}

const value = calculateArith(10,3,"minus");
console.log(value)

const value1 = calculateArith(10,3,"sum")
