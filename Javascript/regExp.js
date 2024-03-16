let emailPattern = new RegExp("(?=.*@)(?=.+.com)"); 
let emailString = prompt("Enter email id(someone@xyz.abc)"); 
if(!(emailPattern.test(emailString))) { 
     alert("Email Id is invalid! It should contain@ and .");
} 
else { 
    alert("Email Id is Valid"); 
} 



