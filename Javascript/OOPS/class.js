class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }

encryPassword(){
    return `${this.password}abc`
}
changeUsername(){
    return this.username.toUpperCase();
}
}

const Dip = new User("dip","dipe@13","123")

console.log(Dip.encryPassword())

console.log(Dip.changeUsername())

