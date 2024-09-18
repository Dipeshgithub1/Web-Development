// login.js
class User {
    validate(username, password) {
        if (username === 'admin' && password === 'password') {
            return 'Login Successful';
        } else {
            return 'Unauthorized access';
        }
    }
}
export default User;
