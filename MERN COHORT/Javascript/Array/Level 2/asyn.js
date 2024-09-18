function square(n) {
    return n * n;
}
function cube(n){
    return n * n * n;
}

function quad(n){
    return n * n*n*n;
}

function sumofSomething(a,b,fn){
    let square1 = fn(a);
    let square2 = fn(b);
    return square1 + square2;
}


let ans = sumofSomething(2,2,cube);
console.log(ans)



