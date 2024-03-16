let data = {
    "customers": [
        { "firstName": "Bob", "lastName": "Morry" },
        { "firstName": "Albert", "lastName": "Smith" },
        { "firstName": "Kate", "lastName": "Ward" }
    ]
};
//Where data is the JSON object and  
//customers is the array name 

let firstNameOfFirstCustomer = data.customers[0].firstName;
console.log(firstNameOfFirstCustomer); // Output: Bob


//perse - Used to parse a string as JSON and helps the program to process objects. 
let stringJSON = '{"first name":"Dipesh","last name":"Mehra"}';
let obj = JSON.parse(stringJSON);
console.log(obj);

