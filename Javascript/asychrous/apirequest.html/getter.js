class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    //getter
    get email() {
       return this._email.toUpperCase()
    }
    //setter
    set email(value){
        this._email = value.toUpperCase()
    
    }
}

const dip = new User("dipesh@chatgpt.ai","abc")

console.log(dip.email)
console.log(dip.password)