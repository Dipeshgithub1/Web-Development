const express = require("express");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET || "default_secret"; // Use environment variable for JWT secret
const app = express();
app.use(express.json()); // Middleware to parse JSON

const ALL_USERS = [
    {
        username: "harkirat@.com",
        password: "123",
        name: "Harkirat Singh"
    },
    {
        username: "Dip@1.com",
        password: "1234",
        name: "Dip Mehra"
    },
    {
        username: "Dipesh@iic.com",
        password: "12387",
        name: "Dipesh M"
    },
];

function userExists(username, password) {
    return ALL_USERS.some(user => user.username === username && user.password === password);
}

app.post("/signin", function(req, res) {
    const { username, password } = req.body;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "Invalid username or password"
        });
    }

    const token = jwt.sign({ username: username }, jwtSecret);
    return res.json({ token });
});

app.get("/users", function(req, res) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            msg: "No token provided"
        });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        const username = decoded.username;
        const user = ALL_USERS.find(user => user.username === username);

        if (!user) {
            return res.status(404).json({
                msg: "User not found"
            });
        }

        return res.json({ user });

    } catch (error) {
        return res.status(403).json({
            msg: "Invalid token"
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
