const descriptors = Object.getOwnPropertyDescriptors(Math,"PI")

console.log(descriptors)

//console.log(Math.PI)

//Math.PI = 5;

//console.log(Math.PI)

const chai = {
    name: "ginger chai",
    price: 450,
    isAvailability: true
}



console.log(Object.getOwnPropertyDescriptors(chai,"name"))

Object.defineProperty(chai,"name",{
    writable: false,
    Enumerable :false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))