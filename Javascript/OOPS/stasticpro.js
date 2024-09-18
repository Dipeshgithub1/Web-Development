class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`username is ${this.username}`);
    }

     static createId() {
        return '123';
    }
}

const dip = new User('dipesh');
//console.log(dip.createId()); // Outputs: 123


class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@433.com")
iphone.logMe()
console.log(iphone.createId())