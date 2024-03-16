//array

const myarr = [2,3,4,5,6,5,6]
console.log(myarr[0])

const myHeros = ['shaktiman','batman','superman','spiderman']

console.log(myHeros)

const myArr = new Array(1,2,6,8,9)

console.log(myArr[4])

//Array method

myArr.push(10)
console.log(myArr)
myArr.pop();
console.log(myArr)
myArr.shift()
console.log(myArr)

console.log(myArr.includes(5))

console.log(myArr.includes(9))

console.log(myArr.indexOf(5))
console.log(myArr.indexOf(3))

const newArr = myArr.join();

console.log(newArr)

console.log(typeof newArr)

//slice , splice

console.log("A ", myArr);

const myN1 = myArr.slice(0, 3);

console.log(myN1)

console.log("B ", myArr)

const myN2 = myArr.splice(0, 3);

console.log(myN2)

console.log("C ", myArr)




