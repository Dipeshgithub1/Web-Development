class User {
  constructor(username) {
    this.username = username;
  }
  
  logMe() {
    console.log(`username is ${this.username}`);
  }
}

class Teachers extends User {
  constructor(username, email, password) {
    super(username); // Pass username to the superclass constructor
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course is introduced by ${this.username}`);
  }
}

const Dip = new Teachers("dip", "dip@gmail.com", "123");

Dip.addCourse(); // Outputs: A new course is introduced by dip
Dip.logMe(); // Outputs: username is dip


const masalaChai = new User("Masalachai")

masalaChai.logMe()

console.log(Dip === masalaChai)

console.log(Dip === Teachers)

console.log(Dip instanceof Teachers)

console.log(Dip instanceof User)