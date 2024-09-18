function sum(num1,num2,ftocall){
    let result = num1 + num2;
    ftocall(result);
}

function displayResult(data){
    console.log("Result of the sum is : ", + data);
}

function displayResultPassive(data){
    console.log("sum's is result : ", + data);
}

const ans = sum(1,2,displayResult);